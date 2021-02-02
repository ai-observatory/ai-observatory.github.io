<template>
  <b-tab title="ADMS + Discrimination">
    <p>
      Automated Decision Making Systems are often used to generate
      classifications about individuals or communities, for example, by
      ascribing certain labels or classifications like &lsquo;fraudulent&rsquo;,
      &lsquo;creditworthy&rsquo;, &lsquo;criminal&rsquo; or
      &lsquo;trustworthy&rsquo; to groups that share common attributes. The use
      of ADMS to classify and rank information and data, can be systematically
      biased and discriminatory against individuals or communities which possess
      certain characteristics, for example, along lines of gender, class, caste
      or ethnicity, which can lead to unjust social outcomes for these groups.
      This section interrogates how ADMS in India is used to classify among
      people and populations and how this can lead to systemic and structural
      discrimination.
    </p>

    <div>
      <b-img
        center
        style="width: 100%; height: 650px; object-fit: cover"
        src="../../public/icon7.png"
        fluid
        alt=""
      ></b-img>
    </div>
    <p>
      ADMS can be systematically biased against, or in favour of, groups of
      people who share particular attributes. Often, these biases reproduce
      socially-embedded and historical discrimination along lines of gender,
      caste or ethnicity. Due to the scale at which algorithms used in various
      ADMS are applied, these biases can quickly become pervasive and socially
      consequential. However, the sources of discrimination can be unaccounted
      for or overlooked, and often are obscured due to the challenges of
      transparency in ADMS, making it difficult to identify or rectify.<sup
        ><a href="#sdfootnote1sym" name="sdfootnote1anc"><sup>1</sup></a></sup
      >
    </p>
    <p>
      Multiple sources of bias can exist within ADMS, which can lead to
      discriminatory outcomes &ndash; from the technical architecture of the
      algorithmic model, the data on which it operates, or the context in which
      it is used. For example, the historical biases in the kind of data
      collected within policing databases and used within the CCTNS system can
      become embedded within ADMS use in policing more generally. Historical
      police records over-represent particular communities along lines of class
      and caste, and an automated system relying upon such data is more likely
      to over-represent such communities, for example, in making decisions about
      which areas to police.
    </p>
    <p>
      Historical patterns of discrimination are particularly likely to be
      reproduced in the functioning of machine learning systems. Since these
      types of algorithmic systems learn patterns from underlying historical
      data and apply these patterns in making decisions about future behaviours
      or phenomenon, they are more likely to recognise and reproduce existing
      inequalities and discrimination, often in a way which is posited as
      &lsquo;neutral&rsquo; or &lsquo;objective&rsquo;.<sup
        ><a href="#sdfootnote2sym" name="sdfootnote2anc"><sup>2</sup></a></sup
      >
      Processes which have relied upon machine learning, like modern image
      recognition and facial recognition systems, or &lsquo;predictive
      policing&rsquo; systems have been shown to reproduce such historical
      biases due to underlying biases present in the datasets upon which they
      operate. For example, studies of facial recognition technologies have
      consistently shown how their performance varies according to ethnicity
      &ndash; in part because the images on which they are &lsquo;trained&rsquo;
      are not diverse.<sup
        ><a href="#sdfootnote3sym" name="sdfootnote3anc"><sup>3</sup></a></sup
      >
    </p>
    <div class="modal-button-container">
      <b-button class="modal-button" v-b-modal="'case-study-8'"
        >[Case Study: Automated Facial Recognition System and the NIST
        Standards]</b-button
      >
      <b-modal id="case-study-8" size="xl" hide-footer>
        <div class="d-block text-left">
          <h3>
            Case Study: Automated Facial Recognition System and the NIST
            Standards
          </h3>
          <p>
            In July, 2019, the National Crime Records Bureau began the process
            of inviting bids for the installation of an &lsquo;Automated Facial
            Recognition System&rsquo; which would connect to policing and law
            enforcement databases around the country, in order to build a
            centralised, national facial recognition system. In the procurement
            documents like the Request for Proposal, the NCRB has relied upon
            specific technical standards in order to indicate the proposed
            &lsquo;efficiency&rsquo; and reliability of the software. In
            particular, the NCRB has relied on the test for the accuracy of FRT
            conducted by the National Institute of Standards and Technologies,
            along with technical demonstrations of how &lsquo;accurate&rsquo;
            the technology is, based on data provided by the NCRB.
          </p>
          <blockquote cite="http://">
            Accuracy, however, is a highly contingent metric. As per the NIST
            itself, facial recognition algorithms perform differently across
            different demographics &ndash; along lines of gender and ethnicity.
            Additionally, these systems perform very differently under
            &lsquo;test conditions&rsquo; as against when they are deployed in
            real-world scenarios.
          </blockquote>
          <p>
            Accuracy, however, is a highly contingent metric. As per the NIST
            itself, facial recognition algorithms perform differently across
            different demographics &ndash; along lines of gender and ethnicity.
            Additionally, these systems perform very differently under
            &lsquo;test conditions&rsquo; as against when they are deployed in
            real-world scenarios. The NIST itself recognises this and creates
            distinct benchmarks for its Facial Recognition Vendor Test (FRVT),
            relied upon by the NCRB. The &lsquo;accuracy&rsquo; ultimately
            depends on the underlying data presented to the system, as well as
            the new data on which it is expected to operate. Therefore, a single
            test or number, such as the one indicated under the RFP, is
            insufficient to understand whether the system will function
            &lsquo;correctly&rsquo; across demographics. A testing process which
            does not account for potential discrimination could, therefore,
            falsely categorise a system as being &lsquo;accurate&rsquo; based
            only on its performance on a particular group.&nbsp;
          </p>

          <div>
            <b-img
              center
              style="width: 100%; height: 650px; object-fit: cover"
              src="../../public/icon6.png"
              fluid
              alt="surveillance and profiling harms"
            ></b-img>
          </div>

          <p>
            Discriminatory FRT use in law enforcement can have severe
            consequences &ndash; not only for individuals who may be falsely
            flagged and subject to invasive policing procedures, but
            particularly when reproduced at a social level, they can replicate,
            enhance, and potentially and perversely justify discriminatory
            police practice against minorities and marginalised
            populations.&nbsp;
          </p>
        </div>
      </b-modal>
    </div>

    <p>
      Another source of discrimination is in the modelling of the algorithmic
      system and the biases inherent in the task of selecting the inputs and
      outputs of the algorithmic system. The choice of selecting particular data
      as relevant factors in classification or prediction is key to the task of
      algorithmic modelling, and can embed assumptions which lead to
      discrimination. For example, a software known as
      <a
        href="https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing"
        >COMPAS</a
      >, used in the USA to determine risk for releasing undertrial prisoners on
      bail, had been shown to systematically discriminate against people of
      colour. One possible reason for this discrimination could be the factors
      which were chosen to indicate &lsquo;risk of re-offending&rsquo; &ndash;
      including prior arrests and arrests of close families or friends. These
      data or &lsquo;features&rsquo; were more likely to occur for people of
      colour, and consequently, these factors could have influenced the
      algorithm to systematically indicate higher risk for these
      groups.Similarly, a study of the Delhi Police&rsquo;s &lsquo;Crime
      Mapping&rsquo; software C-MAPS indicated that the filters used to identify
      areas for policing or crime hotspots are classified using filters for
      immigrant settlements or minority areas. Such biases may also be embedded
      within algorithmic design unintentionally, through the lack of testing or
      considerations of diverse populations. For example, the Aadhar systems
      fingerprinting and biometric pattern matching algorithm has been shown to
      underperform on particular demographics, including based on age and
      gender. Examples like this also show how proxy characteristics &ndash; or
      indirect discrimination &ndash; can be built into algorithmic systems,
      even if the algorithm does not directly consider protected attributes like
      race or gender as an input in making decisions.&nbsp;
    </p>
    <p>
      The various sources of biases inherent withing ADMS, coupled with the
      failures of accountability and transparency outlined in this toolkit, make
      discrimination within the large technological systems used by public
      agencies difficult to uncover and challenge. Moving ahead with governance
      through ADMS without critically reflecting on how these challenges of
      discrimination can be resolved is antithetical to principles of
      substantive equality and non-discrimination that we value.
    </p>
    <p>
      Another source of discrimination is in the modelling of the algorithmic
      system and the biases inherent in the task of selecting the inputs and
      outputs of the algorithmic system. The choice of selecting particular data
      as relevant factors in classification or prediction is key to the task of
      algorithmic modelling, and can embed assumptions which lead to
      discrimination. For example, a software known as
      <a
        href="https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing"
        >COMPAS</a
      >, used in the USA to determine risk for releasing undertrial prisoners on
      bail, had been shown to systematically discriminate against people of
      colour. One possible reason for this discrimination could be the factors
      which were chosen to indicate &lsquo;risk of re-offending&rsquo; &ndash;
      including prior arrests and arrests of close families or friends. These
      data or &lsquo;features&rsquo; were more likely to occur for people of
      colour, and consequently, these factors could have influenced the
      algorithm to systematically indicate higher risk for these groups.
      Similarly, a study of the Delhi Police&rsquo;s &lsquo;Crime Mapping&rsquo;
      software C-MAPS indicated that the filters used to identify areas for
      policing or crime hotspots are classified using filters for immigrant
      settlements or minority areas.<sup
        ><a href="#sdfootnote4sym" name="sdfootnote4anc"><sup>4</sup></a></sup
      >
      Such biases may also be embedded within algorithmic design
      unintentionally, through the lack of testing or considerations of diverse
      populations.<sup
        ><a href="#sdfootnote5sym" name="sdfootnote5anc"><sup>5</sup></a></sup
      >
      For example, the Aadhar systems fingerprinting and biometric pattern
      matching algorithm has been shown to underperform on particular
      demographics, including based on age and gender.<sup
        ><a href="#sdfootnote6sym" name="sdfootnote6anc"><sup>6</sup></a></sup
      >Examples like this also show how proxy characteristics &ndash; or
      indirect discrimination &ndash; can be built into algorithmic systems,
      even if the algorithm does not directly consider protected attributes like
      race or gender as an input in making decisions.
    </p>
    <p>
      The various sources of biases inherent withing ADMS, coupled with the
      failures of accountability and transparency outlined in this toolkit, make
      discrimination within the large technological systems used by public
      agencies difficult to uncover and challenge. Moving ahead with governance
      through ADMS without critically reflecting on how these challenges of
      discrimination can be resolved is antithetical to principles of
      substantive equality and non-discrimination that we value.
    </p>
    <div class="footnotes">
      <div>
        <p>
          <a href="#sdfootnote1anc" name="sdfootnote1sym">1</a> Barocas S and
          Selbst AD, &lsquo;Big Data&rsquo;s Disparate Impact&rsquo;,
          <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2477899#"
            >104 California Law Review 671 (2016)</a
          >.
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote2anc" name="sdfootnote2sym">2</a> Chouldechova,
          A., &lsquo;Fair prediction with disparate impact: A study of bias in
          recidivism prediction instruments&rsquo;, 5(2) Big Data,
          153&ndash;163, 2017.
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote3anc" name="sdfootnote3sym">3</a> Buolamwini J and
          Gebru T, &lsquo;Gender Shades: Intersectional Accuracy Disparities in
          Commercial Gender Classification&rsquo;, Proceedings of the 1st
          Conference on Fairness, Accountability and Transparency, PMLR
          81:77-91, 2018
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote4anc" name="sdfootnote4sym">4</a> Narayan, S, and
          Marda, V, &lsquo;Data in New Delhi&rsquo;s Predictive Policing System,
          Proceedings of the 2020 Conference on Fairness, Accountability, and
          Transparency, &lt;<a
            href="https://dl.acm.org/doi/abs/10.1145/3351095.3372865"
            ><u>https://dl.acm.org/doi/abs/10.1145/3351095.3372865</u></a
          >&gt;
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote5anc" name="sdfootnote5sym">5</a> Drozdowski P and
          others, &lsquo;Demographic Bias in Biometrics: A Survey on an Emerging
          Challenge&rsquo; [2020]
          <a
            href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8566059"
            >IEEE Transactions on Technology and Society</a
          >
          ( Volume: 1,
          <a
            href="https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=9107511"
            >Issue: 2</a
          >, June 2020)
        </p>
      </div>
      <div>
        <p>
          <a href="#sdfootnote6anc" name="sdfootnote6sym">6</a> Rao U and Nair
          V, &lsquo;Aadhaar: Governing with Biometrics&rsquo; (2019) 42 South
          Asia: Journal of South Asian Studies 469
        </p>
      </div>
    </div>
  </b-tab>
</template>

<script></script>

<style lang="scss" scoped></style>
