<template>
  <div>
    <h1>Reclaiming AI Futures</h1>

    <b-container class="artist-row">
      <b-row>
        <!-- first card -->
        <b-col>
          <b-card
            bg-variant="dark"
            text-variant="white"
            tag="article"
            style="
              max-width: 17rem;
              height: 300px;
              font-size: 13px;
              border: none;
            "
            class="mb-4 artist-card"
          >
            <b-card-text style="padding: 0">
              <div style="padding-bottom: 15px">
                <div class="art-title">
                  Reclaiming AI Futures for Economic Planning
                </div>
                <!-- <div class="art-type">Twitter Page</div> -->
              </div>
            </b-card-text>

            <div style="float: bottom" class="modal-button-container">
              <b-button
                class="modal-button"
                v-b-modal="'card-details-1'"
                squared
                variant="dark"
                v-on:click="modalClick"
                :value="id"
                >Details</b-button
              >
            </div>
          </b-card>
        </b-col>

        <b-col>
          <b-card
            bg-variant="dark"
            text-variant="white"
            tag="article"
            style="
              max-width: 17rem;
              height: 300px;
              font-size: 13px;
              border: none;
            "
            class="mb-4 artist-card"
          >
            <b-card-text style="padding: 0">
              <div style="padding-bottom: 15px">
                <div class="art-title">AlgoLeela</div>
                <!-- <div class="art-type">Twitter Page</div> -->
              </div>
            </b-card-text>

            <div style="float: bottom" class="modal-button-container">
              <b-button
                class="modal-button"
                v-b-modal="'card-details-2'"
                squared
                variant="dark"
                v-on:click="modalClick"
                :value="id"
                >Details</b-button
              >
            </div>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <!-- first card -->
        <b-col>
          <b-card
            bg-variant="dark"
            text-variant="white"
            tag="article"
            style="
              max-width: 17rem;
              height: 300px;
              font-size: 13px;
              border: none;
            "
            class="mb-4 artist-card"
          >
            <b-card-text style="padding: 0">
              <div style="padding-bottom: 15px">
                <div class="art-title">I am AI v.2.3</div>
                <!-- <div class="art-type">Twitter Page</div> -->
              </div>
            </b-card-text>

            <div style="float: bottom" class="modal-button-container">
              <b-button
                class="modal-button"
                v-b-modal="'card-details-3'"
                squared
                variant="dark"
                v-on:click="modalClick"
                :value="id"
                >Details</b-button
              >
            </div>
          </b-card>
        </b-col>

        <b-col>
          <b-card
            bg-variant="dark"
            text-variant="white"
            tag="article"
            style="
              max-width: 17rem;
              height: 300px;
              font-size: 13px;
              border: none;
            "
            class="mb-4 artist-card"
          >
            <b-card-text style="padding: 0">
              <div style="padding-bottom: 15px">
                <div class="art-title">
                  Sample Illustrations from the AI Observatory
                </div>
                <!-- <div class="art-type">Twitter Page</div> -->
              </div>
            </b-card-text>

            <div style="float: bottom" class="modal-button-container">
              <b-button
                class="modal-button"
                v-b-modal="'card-details-4'"
                squared
                variant="dark"
                v-on:click="modalClick"
                :value="id"
                >Details</b-button
              >
            </div>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <!-- first card -->
        <b-col>
          <b-card
            bg-variant="dark"
            text-variant="white"
            tag="article"
            style="
              max-width: 17rem;
              height: 300px;
              font-size: 13px;
              border: none;
            "
            class="mb-4 artist-card"
          >
            <b-card-text style="padding: 0">
              <div style="padding-bottom: 15px">
                <div class="art-title">This Scene May Contain ______</div>
                <!-- <div class="art-type">Twitter Page</div> -->
              </div>
            </b-card-text>

            <div style="float: bottom" class="modal-button-container">
              <b-button
                class="modal-button"
                v-b-modal="'card-details-5'"
                squared
                variant="dark"
                v-on:click="modalClick"
                :value="id"
                >Details</b-button
              >
            </div>
          </b-card>
        </b-col>

        <b-col>
          <b-card
            bg-variant="dark"
            text-variant="white"
            tag="article"
            style="
              max-width: 17rem;
              height: 300px;
              font-size: 13px;
              border: none;
            "
            class="mb-4 artist-card"
          >
            <b-card-text style="padding: 0">
              <div style="padding-bottom: 15px">
                <div class="art-title">
                  your dataset won't let me thrive / your dataset must die
                </div>
                <!-- <div class="art-type">Twitter Page</div> -->
              </div>
            </b-card-text>

            <div style="float: bottom" class="modal-button-container">
              <b-button
                class="modal-button"
                v-b-modal="'card-details-6'"
                squared
                variant="dark"
                v-on:click="modalClick"
                :value="id"
                >Details</b-button
              >
            </div>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <!-- first card -->
        <b-col>
          <b-card
            bg-variant="dark"
            text-variant="white"
            tag="article"
            style="
              max-width: 17rem;
              height: 300px;
              font-size: 13px;
              border: none;
            "
            class="mb-4 artist-card"
          >
            <b-card-text style="padding: 0">
              <div style="padding-bottom: 15px">
                <div class="art-title">Word!</div>
                <!-- <div class="art-type">Twitter Page</div> -->
              </div>
            </b-card-text>

            <div style="float: bottom" class="modal-button-container">
              <b-button
                class="modal-button"
                v-b-modal="'card-details-7'"
                squared
                variant="dark"
                v-on:click="modalClick"
                :value="id"
                >Details</b-button
              >
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-modal
      body-class="data-modal-button"
      header-class="data-modal-button"
      id="card-details-1"
      size="xl"
      hide-footer
    >
      <div style="padding: 1em" class="art-description">
        This work imagines a near future where there is a people's government -
        that is, a government that works in the people's interests as a whole.
        It explores how this government would make decisions related to
        technology in one sector, agriculture. In doing so it points towards
        answers to two questions: (1) How can AI help in achieving the dream of
        a largely planned economy? and (2) What contradictions exist in such a
        society, and what role does technology play in resolving or furthering
        them? The work takes a dialectical view of technology and society. It
        uses the format of a Twitter feed, for familiarity and ease of
        understanding, and documents the goings-on in a national conference on
        agriculture and technology. It is accompanied by an essay for context.
      </div>
      <div style="padding: 1em">by</div>
      <div style="padding: 1em" class="artist-name">
        All India IT and ITeS Employees' Union and Critters' Collective
      </div>
      <div style="padding: 1em" class="art-link">
        <a href="https://twitter.com/NCAT_2035">Details</a>
      </div>
    </b-modal>

    <b-modal
      body-class="data-modal-button"
      header-class="data-modal-button"
      id="card-details-2"
      size="xl"
      hide-footer
    >
      <div style="padding: 1em" class="art-description">
        We imagine the future of explainable AI, a movement that seeks to
        explain the decisions made by an AI system. We seek to create pathways
        for explanations that are truly human centered and empathetic. We seek
        to develop ‘activists’ out of users who can question and seek to find
        answers to their questions pertaining to digital interactions which
        puzzle them. Hence moving beyond the seduction of User Interface design.
        We seek to create explanations - which look at users as learners and
        hence align with various pedagogical frameworks. We imagine a future
        which is just, accountable and equitable.
      </div>
      <div style="padding: 1em">by</div>
      <div style="padding: 1em" class="artist-name">
        Daksha Dixit, Simran Singh and Kartik Handa
      </div>
      <div style="padding: 1em" class="art-link">
        <a
          href="https://drive.google.com/drive/folders/1oxiL8N1ECGbM7Cxddpdx35uoxcskUoBW?usp=sharing"
          >Details</a
        >
      </div>
    </b-modal>

    <b-modal
      body-class="data-modal-button"
      header-class="data-modal-button"
      id="card-details-3"
      size="xl"
      hide-footer
    >
      <div style="padding: 1em" class="art-description">
        "I am AI is a magickal game that combines elements of roleplaying and
        strategy through a narrative driven by shuffling and picking cards.
        Players are invited to move around parallelverse Bengaluru in four
        different embodiments of labour to create unusual and radically
        diffracted alliances friendships. The game challenges players to examine
        their assumptions both about artificial intelligence (AI) and revolution
        while collaborating through processes of journaling, self-reflection,
        discussion, and strategic decisionmaking along with some critical
        guidance from the goddesses of Chance. All this and more to bring about
        the real AI Revolution!"
      </div>
      <div style="padding: 1em">by</div>
      <div style="padding: 1em" class="artist-name">Diane Daayan</div>
      <div style="padding: 1em" class="art-link">
        <a href="https://screentop.gg/@inannasflood/iamai">Details</a>
      </div>
    </b-modal>

    <b-modal
      body-class="data-modal-button"
      header-class="data-modal-button"
      id="card-details-4"
      size="xl"
      hide-footer
    >
      <div style="padding: 1em" class="art-description">
        Maps_Territories and Learning_Knowing: The illustrations in this
        narrative are an attempt to create a visual language for phenomenon
        around automated decision-making systems, and the various actors engaged
        in the structuring, running, subversion and through it, the ones
        exploited through it. The actors are an extension of an ongoing mapping
        that started out with the Revisualising Cybersecurity project, which
        shows the origin stories of dineshan. A manifestation of the
        intermingling of corporate and state interests around platforms and
        citizen/ user participation. This participation being rich sources of
        data extraction, referred to in many ways, most recently as
        ""Surveillance Capitalism"". These relationships are further explored in
        the comic ""dad and his invisibility mundu"" to illustrate what could
        happen when there is a rift between legality and justice when it comes
        to legislation around data and privacy. This mapping or extension
        develops different relationships between dineshan(s) and the people they
        want to know, keeping in mind the unfolding nature of automated
        decision-making systems and machine learning models used around the
        world, but specifically in India. The CCTV’d ones leaning heavily
        towards private and/or corporate interests represented without the
        crown, the ones with crowns are state bodies, often constituted by an
        electoral process directly or indirectly. The colour red is used often
        to indicate something that manifests in a tangible form:
        subject/citizens of a state, infrastructure that allows for
        participation/ interaction. The colour blue is usually an indicator of
        aggregated data and datasets that have been compressed or processed
        through manual moderation, paperwork and supervised/ unsupervised
        learning models. A mix of red, blue and yellow indicates an extraction
        of behaviour that has been quantified in one or more ways, often under
        the label of ""raw data''. Though while drawing these, rawness points
        more towards a metaphor for vegetables and uncooked-ness as opposed to
        referring to data as oil, from crude to pure. Green is usually an
        indicator of learnt (choice-probability based) abstraction that is part
        of a learning model that recognises human behaviours, through
        translation and matching depending on the task that is being automated.
        Typologies for images for facial recognition, or numbers and text for
        welfare, license plate id'ng. There is only one black box in the scheme
        of the illustration, it refers only to the environment in which either
        program are written or where they're parsed. In a mythical landscape of
        dineshans it is easier to assume transparency to non-anthropomorphised
        ADMS instead of allowing the persistence of dystopian blackboxes
        (usually a flowchart mnemonic) which pushes human agency from hope into
        despair. Which cannot be the consequence of mapping complex things.
        Dineshan is the only CCTV’d anthropomorph, as they are a result of human
        agency directed one way or subverted in another. The map underscores the
        importance of the territory, as does a learning model the importance of
        knowing contextually the lived experiences of people, that can only be
        categorised and generalised to a limit, linked data is not the map of a
        person’s unique identity.
      </div>
      <div style="padding: 1em">by</div>
      <div style="padding: 1em" class="artist-name">Paulanthony George</div>
      <div style="padding: 1em" class="art-link">
        <a href="https://ai-observatory.in/">Details</a>
      </div>
    </b-modal>

    <b-modal
      body-class="data-modal-button"
      header-class="data-modal-button"
      id="card-details-5"
      size="xl"
      hide-footer
    >
      <div style="padding: 1em" class="art-description">
        With the advent of OTT platforms, we perhaps find ourselves witnessing
        yet another boom; one that's drastically changing our viewing habits.
        ‘This Scene May Contain ____” ponders abstract representations of a
        future where algorithms can process mass media and expose problematic
        content long associated with Bollywood cinema—a foremost influencer of
        public opinion and behaviour—in real-time. A precedent for such
        possibilities was already set when all digital portals in India were
        recently announced to have come under the purview of the Ministry of
        Information and Broadcasting. The department suggested the use of
        automated decision-making in separating out “lawful” and “unlawful”
        content. A future was thus dreamt to flip the present on its own head,
        where ADM educates rather than censors. Consequently, a few of the most
        commonly observed phobias, propaganda, and -isms have been selected and
        reviewed alongside corresponding findings and statistics. In composition
        and style, 'simpler times' echoed in vintage imagery are juxtaposed with
        the predicted evolution of emerging technologies, which one day, could
        save us from ourselves.
      </div>
      <!-- <div style="padding: 1em">by</div> -->
      <div style="padding: 1em" class="artist-name"></div>
      <div style="padding: 1em" class="art-link">
        <a
          href="https://drive.google.com/drive/folders/1x8UA2WiS1v3IS93ssBOYvDxks0ryOo-w?usp=sharing"
          >Details</a
        >
      </div>
    </b-modal>

    <b-modal
      body-class="data-modal-button"
      header-class="data-modal-button"
      id="card-details-6"
      size="xl"
      hide-footer
    >
      <div style="padding: 1em" class="art-description">
        your dataset won't let me thrive / your dataset must die' are a pair of
        video essays that seek to counter the mythologies in conversations
        around Artificial Intelligence Programming. They are carried out as a
        comparative study of the works of the Black Beat Poet Bob Kaufman and
        the Dalit Poet Siddalingaiah intersecting with datasets contained within
        text-based neural networks. Visual layers of the works contain
        animations of an image based neural network generating generic 'brown'
        faces, video textures from creative programming & hybrid text comprised
        of the poets’ and the neural network’s words.
      </div>
      <div style="padding: 1em">by</div>
      <div style="padding: 1em" class="artist-name">Vishal Kumaraswamy</div>
      <div style="padding: 1em" class="art-link">
        <a
          href="https://vimeo.com/516832597/a29118b54e; https://vimeo.com/516832572/73125d95eb"
          >Details</a
        >
      </div>
    </b-modal>

    <b-modal
      body-class="data-modal-button"
      header-class="data-modal-button"
      id="card-details-7"
      size="xl"
      hide-footer
    >
      <div style="padding: 1em" class="art-description"></div>
      <!-- <div style="padding: 1em">by</div> -->
      <div style="padding: 1em" class="artist-name">Brindaalakshmi K.</div>
      <div style="padding: 1em" class="art-link">
        <a
          href="https://drive.google.com/drive/folders/1CA48UaKDuszxw0URr98OMowtxVKkQFXH?usp=sharing"
          >Details</a
        >
      </div>
    </b-modal>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.artist-card {
  width: 300px;
}

.art-title {
  font-weight: 800;
  font-size: 20px;
}

.modal-button {
  transition: transform 0.5s;
}

.modal-button:hover {
  transform: scale(1.5);
}

.artist-card {
  transition: transform 0.3s;
  margin: auto;
}

.artist-card:hover {
  transform: scale(1.1);
}
</style>
