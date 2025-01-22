'use client'
import React, { useEffect, useState } from 'react'
import { Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import axiosInstance from '@/services/api'
import { Post } from '../types/post'
import avatar from "../../../../public/assets/avatar.png";// Add a default avatar image to your public folder

// Add stories data

const followers = [
  { id: '1', username: 'john.dev', avatar: avatar, isFollowing: false },
  { id: '2', username: 'sarah.code', avatar: avatar, isFollowing: false },
  { id: '3', username: 'mike.tech', avatar: avatar, isFollowing: false },
  { id: '4', username: 'emma.js', avatar: avatar, isFollowing: false },
];



const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axiosInstance.get("/api/socials/blog/posts");
        console.log('Raw response:', res.data); // Debug raw response

        // Handle posts object with posts property
        const postsData = res.data.posts || res.data;
        const postsArray = Array.isArray(postsData) ? postsData : [postsData];


        setPosts(postsArray);
        console.log('Processed posts:', postsArray); // Debug processed data
      } catch (error) {
        console.error('Error fetching posts:', error)
        setPosts([]) // Set empty array on error
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [])

  const getProfilePicture = (profilePic: string | null) => {
    if (!profilePic || profilePic.trim() === '' || profilePic === ' ') {
      return avatar;
    }
    return profilePic;
  };

  if (loading) return <div>Loading...</div>
  if (!Array.isArray(posts)) return <div>No posts available</div>

  return (
    <div className="justify flex-1 space-y-4 pt-[5rem] lg:px-6 sm:ml-56">
      <div className='max-w-[1500px] mx-auto flex gap-[3rem]'>
        <div className='w-full'>
          <div className='flex mx-auto flex-col sm:px-[4rem]'>
            {posts.map((post: Post) => (
              <div key={post._id} className="border-b p-4 space-y-3">
                {/* Author Info */}
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden relative bg-gray-200">
                    <Image
                      src={getProfilePicture(post.profilePicture)}
                      alt={post.author || 'user'}
                      fill
                      className="object-cover"
                      sizes="32px"
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-sm text-gray-500">{post.fullName}</span>
                  </div>
                </div>

                {/* Post Content */}
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{post.content}</p>

                {/* Post Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5" />
                    <span>{post.likesCount} likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments?.length || 0} comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions Sidebar */}
        <div className='hidden lg:flex flex-col w-[350px] p-4 space-y-4 h-fit sticky top-20'>
          <h3 className='text-gray-500 font-semibold'>Suggested for you</h3>
          {followers.map(follower => (
            <div key={follower.id} className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 rounded-full overflow-hidden relative'>
                  <Image
                    src={follower.avatar}
                    alt={follower.username}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='font-medium text-sm'>{follower.username}</span>
                  <span className='text-xs text-gray-500'>Suggested for you</span>
                </div>
              </div>
              <button className='text-blue-500 text-sm font-semibold hover:text-blue-700'>
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts
