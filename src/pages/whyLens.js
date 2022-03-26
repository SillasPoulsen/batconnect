import React from "react";

const WhyLens = () => {
  return (
    <>
      <img
        src="https://files.readme.io/c2459de-illustration_grow.svg"
        className="mx-auto mt-6"
        alt="lenslogo"
      />
      <div className="bg-slate-500 flex justify-center">
        <div className="bg-clip-text bg-gradient-to-r from-black-300 to-black-500 max-w-lg my-6">
          <p>
            Lens Protocol seeks to solve major issues in existing social media
            networks. Namely, Web2 networks all read from their unique,
            centralized database. There is no portability. Your profile,
            friends, and content are locked to a specific network and owned by
            the network operator. This causes each network to fight a zero-sum
            game for your attention.<br/><br/>
            Lens Protocol corrects this by being a user-owned, open social graph
            that any application can plug into. Since users own their data, they
            can bring it to any application built on top of Lens Protocol. As
            the true owners of their content, creators no longer need to worry
            about losing their content, audience, and livelihood based on the
            whims of an individual platform's algorithms and policies.
            Additionally, each application using Lens Protocol benefits the
            whole ecosystem, turning the zero-sum game into a collaborative one.
            Developers can design meaningful social experiences without needing
            to turn to feedback mechanisms to lock in a user's attention.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyLens;
