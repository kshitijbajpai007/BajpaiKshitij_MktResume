const Footer = () => {
  return (
    <footer className="border-t-2 border-black bg-white text-black py-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold uppercase tracking-widest text-lg">Kshitij.</p>
          <p className="font-mono text-xs text-neutral-500 mt-1 uppercase">Creative Strategist & Digital Copywriter</p>
        </div>

        <div className="flex items-center gap-6">
          {/* TODO(kshitij): replace with your LinkedIn URL */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-4"
          >
            LinkedIn
          </a>
          {/* TODO(kshitij): replace with your direct email */}
          <a
            href="mailto:hello@example.com"
            className="font-mono text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-4"
          >
            Email
          </a>
          {/* TODO(kshitij): replace with your Notion portfolio or Resume link */}
          <a
            href="#"
            className="font-mono text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-4"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
