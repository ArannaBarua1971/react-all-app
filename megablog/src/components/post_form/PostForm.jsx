import React, { useCallback, useEffect, useState } from "react";
import postController from "../../appwrite/articles";
import fileManage from "../../appwrite/file";
import { Input, Button, RTE, Select } from "../index";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostForm(post) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      title: post.title || "",
      description: post.description || "",
      featured_img: post.featured_img || "",
      user_id: post.user_id || "",
      status: post.status || false,
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  console.log(userData.$id)
  const submit = async (data) => {
    if (post && post.length > 0) {
      const file = data.featured_img[0]
        ? await fileManage.fileUpload(data.featured_img[0])
        : null;

      if (file) {
        const prevFileDelete = await fileManage.fileDelete(post.featured_img);
      }

      const fileId = file ? file.$id : null;
      const updatePost = await postController.updatePost(post.$id, {
        ...data,
        featured_img: fileId,
      });

      if (updatePost) {
        navigate(`/post/${updatePost.$id}`);
      }
    } else {
      const file = data.featured_img[0]
        ? await fileManage.fileUpload({ file: data.featured_img[0] })
        : null;

      if (file) {
        const fileId = file.$id;
        const uploadPost = await postController.createPost({
          ...data,
          featured_img: fileId,
          user_id: userData.$id,
        });
        if (uploadPost) {
          navigate(`/post/${uploadPost.$id}`);
        }
      } else {
        navigate("/add-post");
      }
    }
  };

  const slugGenerate = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    } else {
      return "";
    }
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugGenerate(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugGenerate, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugGenerate(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="description"
          control={control}
          defaultValue={getValues("description")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("featured_img", { required: !post })}
        />
        {post.length > 0 && (
          <div className="w-full mb-4">
            <img
              src={fileManage.getfilePreview({ fileId: post.featured_img })}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post.length > 0 ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post.length > 0 ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
