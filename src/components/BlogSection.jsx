import { MessageSquare } from "lucide-react";
import blog1 from "@/assets/about-1.jpg";
import blog2 from "@/assets/about-2.jpg";
import blog3 from "@/assets/gallery-1.jpg";

const posts = [
  { image: blog1, date: "JULY 03, 2019", author: "ADMIN", comments: 3 },
  { image: blog2, date: "JULY 03, 2019", author: "ADMIN", comments: 3 },
  { image: blog3, date: "JULY 03, 2019", author: "ADMIN", comments: 3 },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">READ BLOG</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">Recent Blog</h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden h-64">
              <img
                src={post.image}
                alt="Blog post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="pt-6 text-center">
              <div className="flex items-center justify-center gap-3 text-xs font-body text-muted-foreground tracking-wide mb-3">
                <span>{post.date}</span>
                <span>{post.author}</span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" /> {post.comments}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground leading-snug">
                Even the all-powerful Pointing has no control about the blind texts
              </h3>
              <a href="#" className="inline-block mt-4 font-body text-xs tracking-[0.2em] uppercase text-primary hover:underline">
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
