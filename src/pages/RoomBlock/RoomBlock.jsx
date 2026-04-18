import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

import heroBg from "@/assets/blog.jpg";
import blog1 from "@/assets/images/photo_16.JPG";
import blog2 from "@/assets/images/photo_49.JPG";
import blog3 from "@/assets/images/photo_50.JPG";
import blog4 from "@/assets/images/pool12.JPG";
import blog5 from "@/assets/images/photo_52.JPG";
import blog6 from "@/assets/images/photo_53.JPG";

const posts = [
  { image: blog1, date: "August 15, 2024", author: "Admin", comments: 5, title: "Discover Our Newly Renovated Luxury Suites" },
  { image: blog2, date: "August 10, 2024", author: "Admin", comments: 3, title: "Experience Fine Dining at Mountain View Restaurant" },
  { image: blog3, date: "July 28, 2024", author: "Admin", comments: 7, title: "Top 5 Attractions Near Our Hotel" },
  { image: blog4, date: "July 15, 2024", author: "Admin", comments: 4, title: "Relax and Unwind at Our Infinity Pool" },
  { image: blog5, date: "July 05, 2024", author: "Admin", comments: 6, title: "Weekend Getaway Packages Available Now" },
  { image: blog6, date: "June 22, 2024", author: "Admin", comments: 2, title: "Sustainable Practices at Our Eco-Friendly Hotel" },
];

const Blog = () => {
  return (
    <div className="overflow-x-hidden bg-background">


      <section className="relative h-[58vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="MountainViewHotel blog"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
          <p className="font-body text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>{" "}
            <span className="mx-1">/</span> Blog
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">Blog</h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">Read Blog</p>
          <h2 className="font-display text-[42px] md:text-[52px] text-foreground leading-tight">Recent Blog</h2>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map((post, i) => (
            <article key={`${post.image}-${i}`} className="group cursor-pointer">
              <div className="overflow-hidden h-[340px]">
                <img
                  src={post.image}
                  alt="Blog post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="pt-7 text-center">
                <div className="flex items-center justify-center gap-3 text-[12px] font-body text-muted-foreground tracking-[0.12em] mb-3 uppercase">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" /> {post.comments}
                  </span>
                </div>
                <h3 className="font-display text-[27px] text-foreground leading-[1.35]">
                  {post.title}
                </h3>
                
              </div>
            </article>
          ))}
        </div>

      
      </section>
    </div>
  );
};

export default Blog;
