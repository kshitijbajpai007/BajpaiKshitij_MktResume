import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20 px-6 md:px-12 container mx-auto">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start mb-32">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden border-8 border-black shadow-[12px_12px_0px_0px_rgba(162,198,94,1)]"
        >
          <img
            src="/BajpaiAboutPhoto.png"
            alt="Portrait of Kshitij Bajpai"
            loading="lazy"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Narrative Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col justify-center"
        >
          <h2 className="text-sm font-black tracking-[0.4em] text-neutral-400 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-1 bg-accent" /> THE STORY
          </h2>

          <div className="space-y-6 text-black font-medium text-lg md:text-xl leading-relaxed mb-12">
            <p>
              I’m Kshitij Bajpai, a budding creative strategist and digital copywriter. I grew up moving across many tier 2 cities, then moved to New Delhi. And this shift gave me a way to read the distance between audiences: what earns trust, what signals status, what feels familiar, and what falls flat.
            </p>
            <p>
              One thing I realised was that good taste is rooted in cultural capital. Think about it, a joke lands usually when you and your friends share the same cultural references. You find yourself in higher rooms because of your taste, and your cultural capital. So people need good things to develop their taste, and that's where I come in.          </p>
            <p>
              I pay attention to cultural capital because it moves people before a campaign ever reaches them. I turn those signals into sharp strategy and copy that makes brands matter to the people they need to reach.
            </p>
            <p>
              The work must land in culture. The numbers will show up as material evidence.
            </p>
          </div>
        </motion.div>
      </div>


    </div>
  );
};

export default About;
