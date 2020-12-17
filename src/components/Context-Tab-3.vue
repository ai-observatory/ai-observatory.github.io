<template>
  <b-tab title="Algorithms and Automated Decision-Making Systems in India">
    <p>
      An algorithm, in its essence, is a set of rules, or a series of steps, to
      be followed in any method for reaching a particular output from a given
      starting point. This toolkit documents and analyses computational
      algorithms &ndash; methods and processes followed within computational
      processing of data to generate outputs, which are ultimately used within
      Automated Decision Making Systems, to make consequential decisions. While
      algorithms vary in form and nature, there are some general characteristics
      of algorithms which can inform the approaches we take towards addressing
      the concerns of ADMS use in India.
    </p>

    <blockquote cite="http://">
      <p>
        Algorithmic systems encode particular forms of knowledge and logic,
        including biases and assumptions about the behaviour of individuals and
        society. These systems are particularly important to study because these
        logics become embedded within computational and networked infrastructure
        which is replicated and operates at scale and speed &ndash; affecting
        large populations and creating systemic changes, often without the
        foresight or caution to understand and mitigate their potential harmful
        consequences.
      </p>
    </blockquote>

    <p>
      The &lsquo;worldview&rsquo; of an algorithm is context-specific,
      inheriting the knowledge and biases of the designers of the technology.
      Notwithstanding claims of &lsquo;general artificial intelligence&rsquo;
      likening AI to human intelligence, algorithms are limited by the
      assumptions on the basis of which they have been designed. They operate
      and identify only on particular representations of digital data, and
      extract only such meaning from that data as they have been designed to.
      The failure to understand these limitations has led to concerning forms of
      &lsquo;technological solutionism&rsquo; within institutions of law and
      governance.
    </p>
    <div>
      <b-button class="modal-button" v-b-modal="'case-study-15'"
        >[Case Study: Automated Censorship In Online Platforms]</b-button
      >
      <b-modal id="case-study-15" size="xl" hide-footer>
        <div class="d-block text-left">
          <h3>Case Study: Automated Censorship In Online Platforms</h3>
          <p>
            In December, 2018, the Government of India made public draft rules
            for regulating online platforms, the draft &lsquo;Intermediary
            Guidelines Rules, 2018&rsquo;. Among other things, the rules
            contained one particularly concerning mandate &ndash; Rule 3(9)
            requires all intermediaries to deploy &lsquo;technology based
            automated tools&rsquo; to proactively identify and disable
            &lsquo;unlawful information&rsquo;. Besides being vague and
            over-broad, the rule indicates the increasing proclivity of public
            agencies to assume that &lsquo;automated tools&rsquo; &ndash;
            essentially, algorithmic systems &ndash; are capable of performing
            complex tasks which inherently involve human judgement &ndash;
            including the ability to identify information which may be unlawful.
            The problem with these assumptions is the failure to recognise the
            limitations of algorithmic systems operating in complex, human,
            contexts.&nbsp;
          </p>
          <p>
            <br />Determining the legality of information requires understanding
            the context in which it appears &ndash; whether it is intended as a
            parody, is a quotation, or if its meaning depends on the group that
            uses it &ndash; contexts which algorithmic models today, cannot
            understand. Instead, most contemporary algorithmic filters merely
            look for particular phrases, combinations of words or images, and
            automatically flag or censor any information which matches these
            &ndash; a process known as &lsquo;fingerprinting&rsquo;. This is not
            the first time that public agencies have attempted to use
            algorithmic systems to censor online content. In 2018, the Central
            Bureau of Investigation requested social media platforms to deploy
            an automated content identification system called PhotoDNA, which
            uses fingerprinting technology to identify photographs and disable
            their access. While fingerprinting can work in specific, limited
            contexts &ndash; for example, in preventing child sexual
            exploitation images &ndash; its use across contexts risks the
            pre-censorship of legitimate and lawful speech. Ultimately, the
            failure to recognise the limitations of &lsquo;AI&rsquo; tools and
            automated censorship can lead to unjustified restrictions on
            important rights, without scientific or legal legitimacy.
          </p>
        </div>
      </b-modal>
    </div>

    <p>
      The application of algorithms requires the
      <strong>definition of a problem</strong>, and the specification of the
      output which is desired in a manner that can be produced by the
      algorithmic process. This requires a problem to be formalised in terms of
      measurable and quantifiable inputs and outcomes. For example, in an
      algorithm where the question posed is &lsquo;determining fraudulent
      behaviour in taxation&rsquo;, the formalisation could be a desired output
      based on a &lsquo;ground truth&rsquo; which states that &lsquo;outlying
      patterns of differences in declared income and expenditure indicate
      fraudulent behaviour&rsquo;. Once the problem has been formalised in this
      manner, a fraud detection algorithm can be designed to study patterns
      which match the description of the pattern and classify transactions as
      &lsquo;fraud&rsquo; or &lsquo;not fraud&rsquo;. The problem definition is
      an aspect of algorithmic modelling which makes human judgements and values
      most explicit. For example, in an ADMS which decides whether a person is
      &lsquo;potentially criminal&rsquo;, requires the designers of an algorithm
      to determine what qualities of an individual can be mathematically
      calculated in order to identify their &lsquo;criminality&rsquo;, which
      necessarily incorporates subjective judgements about people&rsquo;s
      behaviour.
    </p>
    <p>
      The <strong>nature of the algorithm</strong> used indicates the kind of
      logic that is applied in coming to a particular decision. Algorithms can
      be grouped according to the general mathematical or statistical approaches
      they take towards solving a particular problem (or reaching the desired,
      pre-defined output). Some of the historical examples of early AI used by
      public agencies were &lsquo;logic based&rsquo; expert systems, which were
      programmes in the form of &lsquo;if/then&rsquo; statements, or
      deterministic paths to follow from a particular input. On the other hand,
      many contemporary algorithmic models utilise machine learning.
    </p>
    <p>
      Machine learning is a set of algorithmic systems, which recognises
      underlying patterns in data to understand correlations between data, or to
      model and &lsquo;predict&rsquo; the behaviour of future instances of data.
      Machine learning algorithms are some of the most widely used in ADMS
      today, including the systems documented here. Machine learning systems, in
      particular, are increasingly popular as methods to sort through vast
      amounts of information to identify patterns which may not be immediately
      obvious to humans. Machine learning models learn from historical instances
      of data that they are &lsquo;trained&rsquo; on. Because machine learning
      merely reproduces and optimises certain relationships from historical
      data, the uncritical reliance on machine learning techniques to inform
      decision-making can reproduce systemic biases and structural inequalities
      present in underlying historical data.
    </p>
    <p>
      The nature of the algorithm can impact not only its utility towards
      solving a particular problem, but also other important elements around the
      design of ADMS &ndash; such as the ability of the system to be
      scrutinised, or limitations in its ability to factor in important values
      like non-discrimination or other constraints. For example, decisions which
      utilise a linear regression model, which maps relationships between
      independent variables, may be easier to explain to users of the system,
      than those which utilise multi-layered neural network models, such as
      those seen in contemporary facial recognition systems, including those
      widely used by law enforcement in India. In the previous example of an
      algorithm for determining fraudulent tax payments, a series of legal rules
      may be encoded into an expert system which determines whether the input
      data, as processed by the rules provided to it, indicate fraud.
      Alternatively, in the case of a machine learning system, the algorithm may
      be &lsquo;trained&rsquo; on previously established cases of
      &lsquo;frauds&rsquo; to find patterns and correlations which can be
      applied to subsequent cases in order to classify them as
      &lsquo;fraud&rsquo; or &lsquo;not fraud&rsquo;.&nbsp;
    </p>
    <p>
      The task of selecting the algorithm to be applied for a particular problem
      also requires subjective judgements &ndash; what kinds of error rates
      (false positives or false negatives in the output) are acceptable given
      the constraints of computing power and time? What is a suitable threshold
      for statistical bias and variance exhibited by a machine learning
      algorithm?&nbsp;
    </p>
    <p>
      A second important component of algorithmic design is
      <strong>data</strong>. Computational algorithms operate on specific
      <strong>databases</strong>, within which particular data has been
      structured and organised. Some of the forms of data and databases used in
      ADMS in India have been discussed here. As discussed previously, for data
      to be suitable for computation, data must be classified, structured and
      organised in particular ways.&nbsp;
    </p>
    <div>
      <b-img
        center
        style="width:100%"
        src="../../public/pimg5.png"
        fluid
        alt="out of the box ml"
      ></b-img>
    </div>
    <blockquote cite="http://">
      <p>
        Various kinds of databases can go into the operation of a single ADMS.
        In a Machine Learning system, one database from which the algorithmic
        model &lsquo;learns&rsquo; is known as a training database. The
        &lsquo;trained model&rsquo; is often evaluated against a different
        database to judge its efficacy, through a &lsquo;benchmark
        database&rsquo;. Finally, the model operates on &lsquo;new&rsquo;
        databases which it has not previously encountered, at the point of
        deployment. Each of these databases ultimately impacts how an algorithm
        performs, as well as how it is evaluated or audited. For example, when a
        Machine Learning process is identified as being &lsquo;accurate&rsquo;,
        it is essential to understand the conditions and context in which the
        algorithm has been tested, and against what kinds of benchmark datasets.
      </p>
    </blockquote>
    <p>
      Reliance on algorithms for decision-making can reproduce and magnify
      inaccuracies or biases at scale, particularly when these algorithms are
      deployed by public agencies which interface with large populations. Even
      relatively &lsquo;simple&rsquo; algorithmic processes are embedded within
      complex socio-technical systems of actors, institutions, norms,
      organisations and technical components, making the operation of algorithms
      &lsquo;on the ground&rsquo; difficult to predict, and making
      responsibility for inaccuracies or problems in the design of the algorithm
      difficult to understand or study.
    </p>

    <div>
      <b-button class="modal-button" v-b-modal="'case-study-16'"
        >[Case Study: Algorithmic Assemblages and the Ghosts in India’s Welfare
        Machine]</b-button
      >
      <b-modal id="case-study-16" size="xl" hide-footer>
        <div class="d-block text-left">
          <h3>
            Case Study: Algorithmic Assemblages and the Ghosts in India’s Welfare Machine
          </h3>
          <p>
            The <em>Aadhaar </em>Unique ID project of the Government of India is
            based on the presupposition that digital databases can represent the
            ground truth of unique individual identities &ndash; a necessary
            element in the projects claims towards removing
            &lsquo;leakages&rsquo; by removing &lsquo;duplicates&rsquo; &ndash;
            the title given to potentially fraudulent actors or
            &lsquo;ghosts&rsquo; who siphon off the legitimate claims of welfare
            beneficiaries. Making digital records &lsquo;unique&rsquo; has
            therefore always been the claim and the purpose of the biometric ID.
            These claims of uniqueness are made possible by the assemblages of
            algorithmic systems utilised within the Aadhaar ADMS.
          </p>
          <p>
            Biometric algorithmic systems form the core of Aadhaar&rsquo;s
            enrolment and authentication mechanism. A device captures
            fingerprints, iris scans and face images, and encodes it as an
            apparently unique digital imprint, by extracting particular patterns
            and signals from the captured biometric features. These patterns are
            then matched and compared with existing entries in the biometric
            database, in order to identify similarities according to a
            pre-defined threshold. Aadhaar claims to &lsquo;authenticate&rsquo;
            individuals by matching the data captured through a biometric device
            at any point, to the data stored in the central biometric database.
            While the UIDAI claims that its biometric matching algorithms are
            highly efficient and accurate, by the government&rsquo;s own
            admission, the &lsquo;failure rate&rsquo; of the system is as high
            as 12%, although it is not clear whether this is attributable to how
            the data is measured, or how it is matched with other entries in the
            database.&nbsp;
          </p>
          <div>
            <b-img
              center
              style="width:100%"
              src="../../public/pimg6.png"
              fluid
              alt="seeding the raw data begun"
            ></b-img>
          </div>
          <p>
            Another algorithmic component of Aadhaar has been the
            &lsquo;seeding&rsquo; of Aadhaar numbers within multiple other
            databases, in order to identify and remove duplicates &ndash; in a
            process known as &lsquo;de-duplication&rsquo;. According to the
            UIDAI, the authority in charge of Aadhaar,
            <em
              >&ldquo;De-duplication is the process of using the Demographic and
              Biometric data collected from an enrollee to check against rest of
              the data so as to avoid duplicate enrolments.&rdquo;</em
            >De-duplication algorithms perform &lsquo;inorganic&rsquo; seeding
            by matching names in various welfare beneficiary databases to the
            Aadhaar numbers database. If the algorithm does not find a match, it
            is assumed that the beneficiary entry is a &lsquo;ghost&rsquo; or a
            &lsquo;fake&rsquo;, if there is more than one match, the beneficiary
            is assumed to be a &lsquo;duplicate&rsquo;, and consequently,
            removed from the list of beneficiaries. The output of the
            algorithmic computation, then, is privileged over the&nbsp;
          </p>
          <p>
            Every stage of Aadhaar&rsquo;s decision-making process relies on the
            design of, and values, biases and errors embedded within the
            algorithms and technologies utilised within Aadhaar &ndash; from the
            sensitivity of the biometric recognition and matching algorithms to
            biometrics of different demographics, to the error rates of the
            &lsquo;seeding algorithms&rsquo; for de-duplication. Even as these
            algorithms have repeatedly been shown to be prone to failure and
            error, government processes continue to rely heavily on their
            &lsquo;objectivity&rsquo; of algorithmic systems, without designing
            for how these failures can be contested or overturned by affected
            persons.
          </p>
        </div>
      </b-modal>
    </div>
  </b-tab>
</template>

<script></script>

<style lang="scss" scoped></style>
