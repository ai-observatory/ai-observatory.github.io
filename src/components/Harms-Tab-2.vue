<template>
  <b-tab title="ADMS + Surveillance and Profiling">
    <div>
      <b-img
        center
        style="width: 100%; height: 650px; object-fit: cover"
        src="../../public/pimg9.png"
        fluid
        alt="surveillance and profiling harms"
      ></b-img>
    </div>
    <p>
      Automated Decision-Making Systems are becoming integral to the
      proliferation of surveillance enabled through information technology
      &ndash; a method of observing, knowing and governing individuals and
      populations through information collected about them. Many of the ADMS
      technologies documented in this project are explicitly used for
      surveillance &ndash; to govern and police populations to reduce risk and
      undesired behaviour. This section examines how ADMS in India is used to
      further surveillance and profiling by government agencies.
    </p>
    <p>
      ADMS requires the behaviours, traits and attributes of individuals and
      communities to be abstracted as data, in particular ways which are
      suitable for algorithmic computation. Contemporary ADMS like machine
      learning technologies require increasingly vast amounts of information in
      order to draw usable relationships between them through computation. The
      necessity for huge volumes of data is routinely invoked as a critical
      first step for the development of Artificial Intelligence and related
      technologies.<sup
        ><a href="#sdfootnote1sym" name="sdfootnote1anc"><sup>1</sup></a></sup
      >
      ADMS and &lsquo;AI&rsquo; are therefore providing the imperative for
      amassing vast amounts of data in ways which allow for their algorithmic
      computation (discussed in the section on &lsquo;data and databases in
      ADMS&rsquo;).
    </p>
    <p>
      ADMS themselves are utilised for the explicit purpose of surveillance
      within policing and other public systems &ndash; to profile individuals
      and groups, or to identify and predict people&rsquo;s movements and
      behaviours and classify them based on their perceived risk and
      undesirability. As technologies like social media or CCTV cameras allow
      for the constant production of data about individuals and populations,
      algorithmic systems are deployed to automatically or programmatically sort
      and classify such information, at massive scales. Therefore, the act of
      surveillance itself &ndash; what kind of information to acquire, and what
      kind of behaviour it reveals &ndash; becomes automated, continuous and
      cumulative &ndash; bounded by the logic of the particular algorithmic
      system.<sup
        ><a href="#sdfootnote2sym" name="sdfootnote2anc"><sup>2</sup></a></sup
      >
    </p>
    <p>
      Automated surveillance technologies, like social media surveillance
      systems and automated facial recognition systems across cities, which are
      able to collect and process vast amounts of data to draw meaningful
      inferences about the people being surveilled, are shifting us into a new
      paradigm of mass surveillance and continuous policing and discipline. In
      India, departments ranging from state police forces to the Income Tax
      Department have procured and utilised systems for such unconstrained
      surveillance, including analysis of interconnected government databases as
      well as social media surveillance.
    </p>

    <div class="modal-button-container">
      <b-button class="modal-button" v-b-modal="'case-study-3'"
        >Case Study: Facial Recognition Systems in India</b-button
      >
      <b-modal id="case-study-3" size="xl" hide-footer>
        <div class="d-block text-left">
          <h3>Case Study: Facial Recognition Systems in India</h3>
          <p>
            One of the primary modalities of automated surveillance in India
            today is through the use of Facial Recognition Technologies (FRT).
            FRT uses various algorithmic techniques to extract features of
            individual faces captured through photographs or video feeds, and
            compares them with an existing database of faces, in order to
            identify whether there is a match between the two.
          </p>
          <p>
            The use of FRT for policing has grown exponentially in India, in
            line with the increasing use of video surveillance devices like CCTV
            cameras, particularly within urban centres and &lsquo;smart
            cities&rsquo;. Police agencies in India have claimed to employ FRT
            for purposes ranging from tracking missing children, to identifying
            protestors and &lsquo;rowdy elements&rsquo;.
          </p>
          <p>
            Automated Facial Recognition is one of many technologies integrated
            into ADMS use in policing, which allows for hidden, ubiquitous
            surveillance. At the time of writing, this toolkit has documented
            more than 20 implemented or proposed uses of FRT since 2015 alone,
            each existing without a clear legal basis and without appropriate
            mechanisms for regulation or oversight. Since 2019, the Government
            of India has also attempted to create a &lsquo;national&rsquo;
            Automated Facial Recognition System which will attempt to be a
            centralised FRT system, built upon CCTNS infrastructure, for all
            state and central policing and intelligence forces to utilise.
          </p>
          <p>
            Although the utility and accuracy of these systems is often
            circumspect, FRT technologies substantially expand the surveillance
            capabilities of the state. Without any form of regulation or
            oversight, they are creating the very real possibility of continuous
            and ubiquitous mass surveillance with very little justification.
          </p>
          <p>
            Read more
            <a
              href="https://medium.com/dfrlab/op-ed-the-global-ai-industry-is-intensifying-mass-surveillance-in-india-5c79ebc1bde2"
              ><u>here</u></a
            >
            about how Facial Recognition Technologies are intensifying mass
            surveillance in India.
          </p>
        </div>
      </b-modal>
    </div>
    <p>
      Another way in which ADMS implicate privacy is through the inference and
      production of information about individuals or groups in ways which were
      not consensually disclosed, known as automated profiling. Automated
      profiling often concerns seemingly innocuous information which is
      aggregated and algorithmically computed in ways which can reveal sensitive
      information, including preferences, attributes and behaviours about
      individuals and groups. The information generated through profiling may be
      inaccurate or incomplete, or, even when accurate, may reveal information
      contrary to an individual&rsquo;s agency and self-determination. Further,
      this inferred information is
      <a
        href="http://privacyinternational.org/report/1718/data-power-profiling-and-automated-decision-making-gdpr"
        >subsequently</a
      >
      used to make
      <a
        href="https://www.law.ox.ac.uk/business-law-blog/blog/2018/10/right-reasonable-inferences-re-thinking-data-protection-law-age-big"
        >decisions</a
      >
      concerning individuals.
    </p>

    <blockquote cite="http://">
      Automated profiling often concerns seemingly innocuous information which
      is aggregated and algorithmically computed in ways which can reveal
      sensitive information, including preferences, attributes and behaviours
      about individuals and groups.
    </blockquote>

    <div>
      <b-img
        center
        style="width: 100%; height: 650px; object-fit: cover"
        src="../../public/icon1.png"
        fluid
        alt="icon 1"
      ></b-img>
    </div>
    <p>
      Profiling through automated means are now a common feature of our online
      lives &ndash; programmatic and behavioral targeting of advertisements on
      social media, for
      <a
        href="https://medium.com/swlh/ai-advertising-a-consumer-perspective-f8cd0fb6893"
        >example</a
      >, attempts to identify attributes about consumer behaviour in order to
      send relevant advertisements. Perhaps more concerning, some cases of
      profiling are explicitly used to aid in the political manipulation of the
      subjects of profiling, for example, the revelations made about the firm
      Cambridge Analytica attempting to manipulate voter behaviour on
      Facebook.<sup
        ><a href="#sdfootnote3sym" name="sdfootnote3anc"><sup>3</sup></a></sup
      >
    </p>
    <p>
      The ADMS documented in this project exhibit forms of behavioural profiling
      at individual and group levels. For example, &lsquo;sentiment
      analysis&rsquo; tools are being used by police departments to trawl
      through social media and understand responses of communities to different
      events, including political events like Supreme Court judgements on the
      Ayodhya land dispute, or the abrogation of Article 370 in Kashmir. Such
      systems attempt to identify the &lsquo;emotional&rsquo; responses of
      individuals and communities, and provide this information to law
      enforcement and other government authorities.
    </p>

    <div class="modal-button-container">
      <b-button class="modal-button" v-b-modal="'case-study-4'"
        >[Case Study: Social Media Surveillance and Profiling in India&rsquo;s
        Policing Agencies]</b-button
      >
      <b-modal id="case-study-4" size="xl" hide-footer>
        <div class="d-block text-left">
          <h3>
            Case Study: Social Media Surveillance and Profiling in India&rsquo;s
            Policing Agencies
          </h3>
          <p>
            The surveillance capabilities of government agencies and law
            enforcement have been transformed with the advent of programmatic
            and automated surveillance. The internet, and social media in
            particular, has emerged as a space for gaining all kinds of insights
            into the behaviours of groups and individuals, which are used to aid
            policing and law enforcement. Even though these systems rely largely
            on information which is
            <a
              href="https://scroll.in/article/893015/40-government-departments-are-using-a-social-media-surveillance-tool-and-little-is-known-of-it"
              >&lsquo;open&rsquo; and available online</a
            >, (referred to by law enforcement as Open Source Intelligence or
            OSINT), these systems jeopardise expectations of privacy because
            information is used in contexts for which it was not intended.<sup
              ><a href="#sdfootnote4sym" name="sdfootnote4anc"
                ><sup>4</sup></a
              ></sup
            >
          </p>
          <p>
            Social media surveillance systems are widely used in both law
            enforcement as well as in other government departments. Two major
            forms of social media surveillance documented in this project
            including sentiment analysis tools, and social network analysis
            tools. Sentiment Analysis tools like AASMA scan social media posts
            for particular words or phrases, and alert agencies when it finds
            these terms are found, and can also be used to flag what kind of
            behaviour such speech indicates (&lsquo;violent&rsquo;,
            &lsquo;anti-national&rsquo;, &lsquo;anti-social&rsquo;). Social
            Network Analysis Tools like &lsquo;<a
              href="https://www.x1.com/products/x1-social-discovery/"
              >X1 Social Discovery</a
            >&rsquo; allows law enforcement to automate the process of
            surveilling particular individuals, and generating profiles of their
            social networks or &lsquo;associates&rsquo;.
          </p>
          <p>
            Algorithmic surveillance flips presumptions of innocence, and
            requirements for specificity or justification in targeting
            individuals or groups for surveillance, by roping every individual
            and every action into a matrix of probability which is used to
            decide undesirable or unlawful behaviour. Ultimately, it is
            transforming the relationship between the state and the citizen
            &ndash; where all citizens are presumed to be located on this scale
            of probable guilt, and subject to invasive surveillance.<sup
              ><a href="#sdfootnote5sym" name="sdfootnote5anc"
                ><sup>5</sup></a
              ></sup
            >
          </p>
        </div>
      </b-modal>
    </div>
    <div class="footnotes">
      <div>
        <p>
          <a href="#sdfootnote1anc" name="sdfootnote1sym">1</a> Committee of
          Experts on Non Personal Data Governance Framework, <em>supra</em>
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote2anc" name="sdfootnote2sym">2</a> Andrejevic M and
          Gates K, &lsquo;Big Data Surveillance: Introduction&rsquo; (2014) 12
          Surveillance &amp; Society 185
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote3anc" name="sdfootnote3sym">3</a> Hu M,
          &lsquo;Cambridge Analytica&rsquo;s Black Box&rsquo; (2020) 7 Big Data
          &amp; Society
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote4anc" name="sdfootnote4sym">4</a> Nissenbaum, H.,
          &lsquo;A Contextual Approach to Privacy Online&rsquo;, D&aelig;dalus
          Journal of the American Academy of Arts &amp; Sciences, 2011 &lt;<a
            href="https://www.amacad.org/publication/contextual-approach-privacy-online"
            ><u
              >https://www.amacad.org/publication/contextual-approach-privacy-online</u
            ></a
          >&gt;
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote5anc" name="sdfootnote5sym">5</a> Goldenfein, J.,
          Monitoring Laws, (Cambridge University Press, 2020)
        </p>
      </div>
    </div>
  </b-tab>
</template>

<script></script>

<style lang="scss" scoped></style>
