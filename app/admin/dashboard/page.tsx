import Link from "next/link";
import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";
import {
  FileText,
  CheckCircle,
  Pencil,
  Plus,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

// Define the Blog interface for strict typing
interface IBlog {
  _id: string;
  title: string;
  category: string;
  status: "published" | "draft";
  createdAt: Date;
}

async function getStats() {
  try {
    await connectDB();

    // Run queries in parallel for better performance
    const [total, published, drafts, recentBlogsRaw] = await Promise.all([
      Blog.countDocuments(),
      Blog.countDocuments({ status: "published" }),
      Blog.countDocuments({ status: "draft" }),
      Blog.find().sort({ createdAt: -1 }).limit(5).lean(),
    ]);

    // Serialize ObjectIds to standard strings to prevent Next.js hydration warnings
    const recentBlogs = recentBlogsRaw.map((blog) => ({
      ...blog,
      _id: blog._id.toString(),
    })) as IBlog[];

    return {
      total,
      published,
      drafts,
      recentBlogs,
      error: null,
    };
  } catch (error) {
    console.error("Dashboard DB Error:", error);
    // Return safe fallback values if the database fails
    return {
      total: 0,
      published: 0,
      drafts: 0,
      recentBlogs: [],
      error: "Failed to connect to the database. Please try again later.",
    };
  }
}

export default async function DashboardPage() {
  const { total, published, drafts, recentBlogs, error } = await getStats();

  return (
    <div className="min-h-screen bg-slate-50 mt-15">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Admin Dashboard
            </h1>
            <p className="text-slate-500 mt-2">
              Manage your blogs, content and publishing activity.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition shadow-sm"
            >
              <Plus size={18} />
              Create Blog
            </Link>

            <Link
              href="/admin/blogs"
              className="inline-flex items-center gap-2 border border-slate-300 bg-blue-600 px-5 py-3 rounded-xl hover:bg-slate-100 transition shadow-sm"
            >
              Manage Blogs
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500">Total Blogs</p>
                <h2 className="text-4xl font-bold mt-2">{total}</h2>
              </div>
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                <FileText size={26} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500">Published</p>
                <h2 className="text-4xl font-bold text-green-600 mt-2">
                  {published}
                </h2>
              </div>
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle size={26} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500">Drafts</p>
                <h2 className="text-4xl font-bold text-amber-600 mt-2">
                  {drafts}
                </h2>
              </div>
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Pencil size={26} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border rounded-2xl p-6 mb-10 shadow-sm">
          <h2 className="text-xl font-semibold mb-5">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/admin/blogs/create"
              className="border rounded-xl p-5 hover:bg-slate-50 hover:border-slate-300 transition group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-black text-slate-800">
                Create Blog
              </h3>
              <p className="text-sm text-slate-500">
                Write and publish a new article.
              </p>
            </Link>

            <Link
              href="/admin/blogs"
              className="border rounded-xl p-5 hover:bg-slate-50 hover:border-slate-300 transition group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-black text-slate-800">
                Manage Blogs
              </h3>
              <p className="text-sm text-slate-500">
                Edit or delete existing posts.
              </p>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="border rounded-xl p-5 hover:bg-slate-50 hover:border-slate-300 transition group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-black text-slate-800">
                View Website
              </h3>
              <p className="text-sm text-slate-500">
                Open your live website in a new tab.
              </p>
            </Link>
          </div>
        </div>

        {/* Recent Blogs */}
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-2xl font-semibold">Recent Blogs</h2>
              <p className="text-slate-500 text-sm mt-1">
                Latest articles from your content library.
              </p>
            </div>

            <Link
              href="/admin/blogs"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-black transition"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          {recentBlogs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 font-medium">Title</th>
                    <th className="px-6 py-4 font-medium">Category</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentBlogs.map((blog: IBlog) => (
                    <tr key={blog._id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {blog.title}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {blog.category}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            blog.status === "published"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {blog.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-20 text-center">
              <FileText size={60} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Blogs Yet</h3>
              <p className="text-slate-500 mb-6">
                Start creating your first blog post.
              </p>
              <Link
                href="/admin/blogs/create"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl shadow-sm hover:bg-slate-800 transition"
              >
                <Plus size={18} />
                Create Blog
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}