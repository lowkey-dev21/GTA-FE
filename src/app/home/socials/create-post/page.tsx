'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe, Users, Heart } from 'lucide-react'

const CreatePost = () => {
    const router = useRouter()
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [content, setContent] = useState('')
    const [visibility, setVisibility] = useState('public')
    const [isLoading, setIsLoading] = useState(false)

    const tagCategories = {
        Topics: ['Study', 'Career', 'Technology', 'Gaming', 'Sports'],
        Mood: ['Motivation', 'Success', 'Challenge', 'Help'],
        Academic: ['Mathematics', 'Programming', 'Science', 'Literature']
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    tags: selectedTags,
                    content,
                    visibility 
                }),
            })

            if (response.ok) {
                router.push('/home/socials')
                router.refresh()
            }
        } catch (error) {
            console.error('Error creating post:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen sm:ml-56 mx-auto bg-background">
            <div className="h-16" />
            <div className="px-6 py-6 max-w-[1000px] mx-auto">
                <h1 className="text-3xl font-bold mb-8">Create New Post</h1>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Select Tags</h2>
                    {Object.entries(tagCategories).map(([category, tags]) => (
                        <div key={category} className="mb-4">
                            <h3 className="text-sm text-gray-500 mb-2">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map(tag => (
                                    <Button
                                        key={tag}
                                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                                        className={selectedTags.includes(tag) ? "bg-blue-600" : ""}
                                        onClick={() => {
                                            if (selectedTags.includes(tag)) {
                                                setSelectedTags(selectedTags.filter(t => t !== tag))
                                            } else {
                                                setSelectedTags([...selectedTags, tag])
                                            }
                                        }}
                                    >
                                        #{tag}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <Tabs defaultValue="public" onValueChange={setVisibility}>
                    <TabsList className="grid grid-cols-3 mb-6">
                        <TabsTrigger value="public" className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Public
                        </TabsTrigger>
                        <TabsTrigger value="mates" className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Mates
                        </TabsTrigger>
                        <TabsTrigger value="close-friends" className="flex items-center gap-2">
                            <Heart className="h-4 w-4" />
                            Close Friends
                        </TabsTrigger>
                    </TabsList>

                    {['public', 'mates', 'close-friends'].map((tab) => (
                        <TabsContent key={tab} value={tab}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')} Post
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <textarea
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            className="w-full p-4 border rounded-md min-h-[200px] mb-4 bg-background"
                                            placeholder="What's on your mind?"
                                            required
                                        />
                                        <Button 
                                            type="submit"
                                            disabled={isLoading || selectedTags.length === 0}
                                            className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:opacity-85"
                                        >
                                            {isLoading ? 'Creating...' : 'Create Post'}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    )
}

export default CreatePost