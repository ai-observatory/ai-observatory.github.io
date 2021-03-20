<template>
  <b-tab title="Transparency and Accountability in ADMS" active>
    <h2>Transparency</h2>
    <p>
      Algorithmic systems are frequently referred to as &lsquo;black
      boxes&rsquo; &ndash; as instruments into which inputs and outputs are
      visible, but the precise mechanism of its function is inscrutable. Such
      &lsquo;black box&rsquo; Automated Decision-Making Systems pose structural
      challenges to democratic ideals of transparency, accountability and
      participation, and consequently, to public trust in the operation of these
      systems. It is important to interrogate how these constraints arise and
      what their consequences are.
    </p>

    <div class="">
      <p>
        Transparency is an essential element of a democratic society. Without
        adequate information about decisions that affect their lives, people
        cannot comprehend how these decisions are made, how they may affect
        them, or how they can participate in, and if possible, change such
        decisions. Similarly, it is impossible to hold the use of ADMS
        accountable to any legal standard or guiding principles if the
        mechanisms by which it functions are unknown. Many ADMS pose challenges
        to these ideals, both by being technically opaque, as well as due to the
        institutional opacity which often surrounds these systems.
      </p>
    </div>

    <p>
      The technical opacity of ADMS is a well-known phenomenon. As explained
      previously, computer algorithms within ADMS are essentially
      &lsquo;models&rsquo; or abstractions of the decision-making metrics which
      are employed by human beings. However, in the process of creating these
      algorithmic models, many aspects of the decision-making logic may be
      altered. One area where technical opacity arises is from the inability to
      be able to read or parse the computer programme and understand how this
      decision-making logic has been altered in its translation to software or
      code. Given that not everyone is able to understand how the
      decision-making logic is reflected in source code, even where the source
      code of a computer programme and algorithm is made available, the logic
      always be obvious or accessible to users or affected persons.
    </p>
    <p>
      The technical opacity of ADMS is a well-known phenomenon. As explained
      previously, computer algorithms within ADMS are essentially
      &lsquo;models&rsquo; or abstractions of the decision-making metrics which
      are employed by human beings. However, in the process of creating these
      algorithmic models, many aspects of the decision-making logic may be
      altered. One area where technical opacity arises is from the inability to
      be able to read or parse the computer programme and understand how this
      decision-making logic has been altered in its translation to software or
      code.<sup
        ><a href="#sdfootnote1sym" name="sdfootnote1anc"><sup>1</sup></a></sup
      >
      Given that not everyone is able to understand how the decision-making
      logic is reflected in source code, even where the source code of a
      computer programme and algorithm is made available, the logic always be
      obvious or accessible to users or affected persons.<sup
        ><a href="#sdfootnote2sym" name="sdfootnote2anc"><sup>2</sup></a></sup
      >
    </p>
    <p>
      With the increasing scale and complexity of algorithmic tools, which rely
      on processing hundreds or thousands of inputs through myriad statistical
      or mathematical processes, the logic of decision-making employed within
      algorithms becomes even more difficult to interpret, even to the creators
      of these systems. This may particularly be true for contemporary machine
      learning practices like image recognition through neural networks, where
      the algorithmic system can produce accurate outputs, but using metrics
      which have been &lsquo;learned&rsquo; by the system, that are so
      abstracted from the initial logic of the designers of the algorithm, as to
      be technically un-interpretable by humans.<sup
        ><a href="#sdfootnote3sym" name="sdfootnote3anc"><sup>3</sup></a></sup
      >
    </p>
    <p>
      Another source of the opacity of ADMS is institutional &ndash; caused by
      the legal and institutional mechanisms which govern the operation of these
      systems. Many of the ADMS documented here include computational algorithms
      developed by and procured from private firms, which have deployed
      resources into the creation of these systems, and have an economic
      incentive to retain proprietary ownership and rights over these systems.
      As such, many algorithmic systems are considered the intellectual property
      of these private firms, which are protected as trade secrets of copyrights
      of these firms. These laws prevent the databases, algorithms and other
      associated components of ADMS from being accessed or scrutinised by the
      public, and often even by government agencies procuring such systems. With
      governments increasingly outsourcing important infrastructure, including
      ADMS infrastructure, to private firms, there is correspondingly a shift in
      the norms of transparency &ndash; from public and transparent by default,
      as recognised under a right to information, to private and protected by
      default, protected both by laws like trade secrets, as well as by the
      forms and governance practices of private companies.<sup
        ><a href="#sdfootnote4sym" name="sdfootnote4anc"><sup>4</sup></a></sup
      >
    </p>

    <blockquote cite="http://">
      With governments increasingly outsourcing important infrastructure,
      including ADMS infrastructure, to private firms, there is correspondingly
      a shift in the norms of transparency &ndash; from public and transparent
      by default, as recognised under a right to information, to private and
      protected by default, protected both by laws like trade secrets, as well
      as by the forms and governance practices of private companies.
    </blockquote>
    <div class="modal-button-container">
      <b-button class="modal-button" v-b-modal="'case-study-1'"
        >[Case Study: RTI and Algorithmic Systems]</b-button
      >
      <b-modal id="case-study-1" size="xl" hide-footer>
        <div>
          <b-img
            center
            style="width: 100%"
            src="../../public/img1.png"
            fluid
            alt="RTI and Algorithmic Systems"
          ></b-img>
          <p>
            [Image: Excerpt from an RTI response by the Mumbai Police, on the
            Mumbai City Surveillance Project]
          </p>
        </div>
        <div class="d-block text-left">
          <h3>Case Study: RTI and Algorithmic Systems</h3>
          <p>
            The Right to Information Act in India was a landmark moment which
            made concrete the constitutional right to information, recognising
            the right of a democratic public to demand information from the
            government, and the responsibility of the public agencies to
            proactively provide information, including information about how
            policy decisions are taken; as well as providing information to
            individuals about decisions taken about them.
          </p>
          <p>
            Algorithmic systems have denuded the democratic safeguards that laws
            like the RTI Act provide. While the definition of
            &lsquo;information&rsquo; under the RTI Act is broad enough to cover
            source code, or algorithmic models, this information is often not
            provided by claiming exemptions which exist under the RTI Act, such
            as Section 8(1)(d), which exempts the disclosure of confidential
            information and intellectual property in some circumstances; or
            Section 8(1)(a), which exempts the disclosure of information on
            grounds of the sovereignty and security of the nation. Further,
            disclosure of components of an ADMS, like the databases on which an
            algorithmic system operates, may pose risks to other interests like
            privacy and personal data protection, which are also recognised in
            the RTI Act under Section 8(1)(j).
          </p>
          <p>
            The proliferation of ADMS is systematically incapacitating important
            democratic norms and values, of which the Right to Information
            appears to be one casualty. There is an urgent need to reform and
            bring laws and methods of governmental transparency in line with the
            use of Automated Decision-Making within government.
          </p>
        </div>
      </b-modal>
    </div>
    <p>
      Transparency is not an end in itself &ndash; it is a necessary but not a
      sufficient means of ensuring democratic and equitable ADMS use. In
      particular, it is necessary to understand what forms of transparency can
      lead to better democratic participation and outcomes, and how transparency
      can be balanced against other legitimate considerations like privacy, or
      the need to prevent unintended uses of algorithmic systems.<sup
        ><a href="#sdfootnote5sym" name="sdfootnote5anc"><sup>5</sup></a></sup
      >
    </p>

    <h2>Accountability</h2>
    <p>
      An important and related concern to the transparency of ADMS in India is
      the lack of clear systems of accountability for the failures or harms
      caused by ADMS. Accountability for ADMS requires attributing
      responsibility to an actor, and providing recourse to people affected by a
      particular outcome of an ADMS.
    </p>
    <p>
      Algorithmic systems often shift or distribute agency for decisions in ways
      which have not been previously encountered, and obscures clear lines of
      responsibility for the outcomes of the system. For example, an algorithm
      may be designed by one actor, operating on data provided by another, and
      finally, the ADMS may be used or deployed by a third actor, each of whom
      would have limited knowledge about the others. Often, this could result in
      attributing agency and culpability for an outcome of the system to a human
      actor or institution who did not have control or agency over the decision,
      or even leading to circumstances where the absence of responsibility
      implies no accountability or redress for affected persons.<sup
        ><a href="#sdfootnote6sym" name="sdfootnote6anc"><sup>6</sup></a></sup
      >
    </p>
    <p>
      Another reason that ADMS obscures clear accountability is due to the
      increasing autonomous decision-making capabilities of computer systems
      &ndash; there are many instances where an algorithmic system malfunctions
      or performs in a manner which could not be reasonably foreseen, making
      attribution of responsibility difficult. This is particularly true for
      contemporary machine learning systems which may make non-intuitive
      decisions, the logic of which would be difficult to comprehend (as
      explained in the section above).
    </p>

    <div class="">
      <p>
        Accounting for accountability requires providing clear lines of
        responsibility for the harms or failures caused by ADMS, including
        establishing clear liability for the damage caused by ADMS, and clear
        channels of redress to affected persons.
      </p>
    </div>

    <blockquote cite="http://">
      Another reason that ADMS obscures clear accountability is due to the
      increasing autonomous decision-making capabilities of computer systems
      &ndash; there are many instances where an algorithmic system malfunctions
      or performs in a manner which could not be reasonably foreseen, making
      attribution of responsibility difficult.
    </blockquote>

    <div class="modal-button-container">
      <b-button class="modal-button" v-b-modal="'case-study-2'"
        >[Case Study: Aadhaar and Unaccountable Authentication
        Failures]</b-button
      >
      <b-modal id="case-study-2" size="xl" hide-footer>
        <div class="d-block text-left">
          <h3>Case Study: Aadhaar and Unaccountable Authentication Failures</h3>
          <p>
            The Government of India&rsquo;s Aadhaar Unique Identification system
            consists of various assemblages of algorithms, including algorithmic
            systems which identify individuals, known as
            &lsquo;authentication&rsquo;. Biometric authentication has a
            documented high failure rate<sup
              ><a href="#sdfootnote7sym" name="sdfootnote7anc"
                ><sup>7</sup></a
              ></sup
            >
            and the failure of identification, or incorrect identification can
            have devastating consequences for an individual &ndash; including
            the denial of essential public services like ration. Biometric
            systems are essentially probabilistic, which means that there is
            always a chance of an error in the matching &ndash; and that a
            mathematical algorithmic threshold must be established for what
            percentage error is acceptable and what is not. Given this
            error-prone nature of biometric algorithms, and the consequences of
            its failure, clear accountability becomes particularly
            essential.<sup
              ><a href="#sdfootnote8sym" name="sdfootnote8anc"
                ><sup>8</sup></a
              ></sup
            >
          </p>
          <p>
            However, this measure of accountability has not been forthcoming
            from the Government of India or the agency responsible for Aadhaar
            &ndash; the Unique Identification Authority of India (UIDAI). The
            legislation governing Aadhaar does not specifically detail who is
            responsible to resolve failures of the biometric matching algorithm,
            or how such resolution should occur. While some circulars issued by
            the UIDAI specify that government agencies should incorporate
            &lsquo;exception handling measures&rsquo; in case of biometric
            failures, it has been observed that these measures are often
            <a
              href="https://uidai.gov.in/about-uidai/legal-framework/circulars/12135-exception-handling-in-public-distribution-services-and-other-welfare-schemes-2.html"
              >not made available.</a
            >
            Moreover, alternatives apart, no clear system of accountability has
            been framed for the failure of the biometric algorithms.<sup
              ><a href="#sdfootnote9sym" name="sdfootnote9anc"
                ><sup>9</sup></a
              ></sup
            >
          </p>
          <p>
            Aadhaar still remains an outlier, in that its use is governed by a
            specific legal and regulatory regime, and some measures of
            accountability like grievance redressal mechanisms exist. Even so,
            it remains a cautionary example of the consequences of failing to
            consider and account fault lines within structures of accountability
            that algorithmic systems and ADMS pose.
          </p>
        </div>
      </b-modal>
    </div>

    <div class="footnotes">
      <div>
        <p>
          <a href="#sdfootnote1anc" name="sdfootnote1sym">1</a> Citron DK,
          &lsquo;Technological Due Process&rsquo; 85 Wash U L. Rev., 1249 (2008)
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote2anc" name="sdfootnote2sym">2</a> Ananny M and
          Crawford K, &lsquo;Seeing without Knowing: Limitations of the
          Transparency Ideal and Its Application to Algorithmic
          Accountability&rsquo; (2018) 20 New Media &amp; Society 973
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote3anc" name="sdfootnote3sym">3</a>Burrell J,
          &lsquo;How the Machine &ldquo;Thinks&rdquo;: Understanding Opacity in
          Machine Learning Algorithms&rsquo; (2016) 3 Big Data &amp; Society
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote4anc" name="sdfootnote4sym">4</a> Pasquale F.,
          Black Box Society, (Harvard University Press, 2016); Brauneis R.,
          &amp; Goodman E., Algorithmic Transparency for the Smart City, 20 Yale
          J.L. &amp; Tec.
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote5anc" name="sdfootnote5sym">5</a> Ananny M and
          Crawford K, &lsquo;Seeing without Knowing: Limitations of the
          Transparency Ideal and Its Application to Algorithmic
          Accountability&rsquo; (2018) 20 New Media &amp; Society 973
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote6anc" name="sdfootnote6sym">6</a>Elish, M.C.,
          &lsquo;Moral Crumple Zones: Cautionary Tales in Human-Robot
          Interaction&rsquo;, Engaging Science,
        </p>
        <p>
          Technology, and Society 5 (2019); &lsquo;Responsibility and AI&rsquo;,
          Council of Europe DG (2019) 05
          &lt;https://rm.coe.int/responsability-and-ai-en/168097d9c5&gt;
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote7anc" name="sdfootnote7sym">7</a> &lsquo;Failure
          Rate of Biometric Identification&rsquo;, Rajya Sabha Unstarred
          Question No. 400 of 2018.
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote8anc" name="sdfootnote8sym">8</a> Khera R and
          Patibandla V, &lsquo;Does IT Work? Information Technology (IT) in
          Welfare in India&rsquo;, W. P. No. 2019-04-01,
          &lt;https://web.iima.ac.in/assets/snippets/workingpaperpdf/981901012019-04-01.pdf&gt;
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote9anc" name="sdfootnote9sym">9</a> Kheera, R.,
          &lsquo;Aadhaar Failures: A Tragedy of Errors&rsquo;, 54(14) Economic
          and Political Weekly (2019)
          &lt;https://www.epw.in/engage/article/aadhaar-failures-food-services-welfare&gt;
        </p>
      </div>
    </div>
  </b-tab>
</template>

<script></script>

<style lang="scss" scoped></style>
