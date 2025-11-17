const coderData = {
  name: "Baraa El Hajj",
  role: "Full-stack Engineer",
  seniority: "Mid-Level",
  location: "Lebanon",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
  ],
};

export default function CoderProfileCard() {
  return (
    <div
      className="z-0 w-full mx-auto bg-(--bg-color) border-(--bg-color) relative rounded-lg 
    border shadow-lg"
    >
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent to-(--font-color-header)"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-(--font-color-header) to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-[#36353d]">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-gray-300 font-mono">baraa.js</div>
      </div>

      <div className="overflow-hidden border-t-[2px] border-zinc-300 px-4 lg:px-8 py-4 lg:py-8 relative">
        <div
          className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 
        filter blur-3xl"
        ></div>
        <div
          className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 
        filter blur-3xl"
        ></div>

        <div className="relative flex">
          <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 font-mono text-xs">
            {Array.from(
              {
                length: 12,
              },
              (_, i) => (
                <div key={i} className="leading-relaxed select-none opacity-70">
                  {i + 1}
                </div>
              )
            )}
          </div>

          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-blue-500">const</span>
              <span className="mr-2 text-blue-400">engineer</span>
              <span className="mr-2 text-(--font-color-paragraph)">=</span>
              <span className="text-blue-500">{"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-(--font-color-coder-var-name)">name:</span>
              <span className="text-(--font-color-coder-var-value)">&#39;</span>
              <span className="text-(--font-color-coder-var-value)">
                {coderData.name}
              </span>
              <span className="text-(--font-color-coder-var-value)">&#39;</span>
              <span className="text-(--font-color-paragraph)">,</span>
            </div>
            <div className="pl-6">
              <span className="text-(--font-color-coder-var-name)">role:</span>
              <span className="text-(--font-color-coder-var-value)">&#39;</span>
              <span className="text-(--font-color-coder-var-value)">
                {coderData.role}
              </span>
              <span className="text-(--font-color-coder-var-value)">&#39;</span>
              <span className="text-(--font-color-paragraph)">,</span>
            </div>
            <div className="pl-6">
              <span className="text-(--font-color-coder-var-name)">
                seniority:
              </span>
              <span className="text-(--font-color-coder-var-value)">&#39;</span>
              <span className="text-(--font-color-coder-var-value)">
                {coderData.seniority}
              </span>
              <span className="text-(--font-color-coder-var-value)">&#39;</span>
              <span className="text-(--font-color-paragraph)">,</span>
            </div>
            <div className="pl-6">
              <span className="text-(--font-color-coder-var-name)">
                location:
              </span>
              <span className="text-(--font-color-coder-var-value)">&#39;</span>
              <span className="text-(--font-color-coder-var-value)">
                {coderData.location}
              </span>
              <span className="text-(--font-color-coder-var-value)">&#39;</span>
              <span className="text-(--font-color-paragraph)">,</span>
            </div>
            <div className="pl-6">
              <span className="text-(--font-color-coder-var-name)">
                skills:
              </span>
              <span className="text-blue-500">{"["}</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-(--font-color-coder-var-value)">
                      &#39;
                    </span>
                    <span className="text-(--font-color-coder-var-value)">
                      {skill}
                    </span>
                    <span className="text-(--font-color-coder-var-value)">
                      &#39;
                    </span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-(--font-color-paragraph)">, </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-blue-500">{"]"}</span>
              <span className="text-(--font-color-paragraph)">,</span>
            </div>

            <div>
              <span className="text-blue-500">{"}"}</span>
              <span className="text-(--font-color-paragraph)">;</span>
            </div>
          </code>
        </div>
      </div>

      <div
        className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 pt-3 text-xs text-gray-300 
      flex justify-between items-center"
      >
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
}
