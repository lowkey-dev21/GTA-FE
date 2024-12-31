import { Skeleton } from "@/components/ui/skeleton"
import React from "react";

const Loading = () => {
  return (
    <section className="flex-1 flex flex-col">
      <div className="h-16" />
      <div className="flex-1 flex justify-center px-4">
        <div className="w-full max-w-[1200px] space-y-6">
          <div className="bg-[#121212] rounded-lg p-6">
            <Skeleton className="h-8 w-64 bg-zinc-800 mb-4" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-full bg-zinc-800" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-48 bg-zinc-800" />
                <Skeleton className="h-4 w-32 bg-zinc-800" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#121212] rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24 bg-zinc-800" />
                    <Skeleton className="h-8 w-16 bg-zinc-800" />
                  </div>
                  <Skeleton className="h-8 w-8 bg-zinc-800" />
                </div>
              </div>
            ))}
          </div>

          {[1, 2].map((i) => (
            <div key={i} className="bg-[#121212] rounded-lg p-6">
              <Skeleton className="h-8 w-48 bg-zinc-800 mb-4" />
              <div className="h-48 flex items-center justify-center">
                <Skeleton className="h-4 w-64 bg-zinc-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
