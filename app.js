// ============================================================
// QUESTION DATABASE
// ============================================================
const ALL_QUESTIONS = [

// ===== BARTLE - DESIGNING VIRTUAL WORLDS =====
{ topic:"Virtual Worlds Definition", q:"According to Bartle, what is the most concise definition of a virtual world?", opts:["A space where the imaginary meets the real","A computer game with multiple players","A social media platform with avatars","An online multiplayer environment"], ans:0, exp:"Bartle defines virtual worlds as 'places where the imaginary meets the real', offering a brief but meaningful summary of the concept." },
{ topic:"Virtual Worlds Definition", q:"Which of the following is NOT one of Bartle's six criteria for a virtual world?", opts:["Persistent","Requires payment to access","Real-time","Not Reality"], ans:1, exp:"Bartle's six criteria are: physics, characters, real-time, shared, persistent, and not Reality. Payment is not a criterion." },
{ topic:"Virtual Worlds Criteria", q:"Bartle's Criterion 1 (Physics) states that virtual worlds must operate using:", opts:["The laws of Newtonian physics","User-generated content","An underlying automated rule set","A graphical engine"], ans:2, exp:"Criterion 1 requires an underlying, automated rule set — referred to as the world's 'physics' — that completely defines what can be done." },
{ topic:"Virtual Worlds Criteria", q:"Why are chatrooms NOT considered virtual worlds according to Bartle?", opts:["They lack multiple users","They are not persistent","They have no real-time interaction","They have no underlying physics/material environment"], ans:3, exp:"Chatrooms fail Criterion 1 (Physics) because they have no material environment with physics that players can change." },
{ topic:"Virtual Worlds Criteria", q:"Why is a Dungeons & Dragons campaign NOT a virtual world?", opts:["Its physics are not automated/consistent","It is not shared","It is not persistent","It does not involve characters"], ans:0, exp:"D&D fails Criterion 1 because its physics (the rules) are not implemented in a consistent and automated fashion — a human GM adjudicates them." },
{ topic:"Virtual Worlds Criteria", q:"Bartle's 'real-time' criterion specifies that actions should be recognised within at most:", opts:["1 second","4 seconds","2 seconds","10 seconds"], ans:1, exp:"The four-second figure comes from a British Telecom study from the 1980s cited by Bartle as the cut-off for real-time interaction." },
{ topic:"Virtual Worlds Criteria", q:"Which of the following games is explicitly identified by Bartle as NOT being a virtual world due to failing the 'shared' criterion?", opts:["World of Warcraft","EverQuest","Skyrim (single-player)","Second Life"], ans:2, exp:"Skyrim is a classic single-player RPG — the other characters are NPCs, so it cannot support two simultaneous players as required by Criterion 4." },
{ topic:"Virtual Worlds Criteria", q:"Fortnite (battle royale) fails Bartle's 'persistent' criterion because:", opts:["It has too many players","It has no physics","It is not real-time","It only allows dropping-out after the initial drop-in"], ans:3, exp:"Persistence requires a drop-in, drop-out sensibility. Fortnite only allows leaving, not joining mid-game, so it is not persistent." },
{ topic:"Virtual Worlds Criteria", q:"Why must the sixth criterion ('Not Reality') be included in Bartle's definition?", opts:["Because Reality itself satisfies the other five criteria","Because all virtual worlds are fictional","Because VR headsets can simulate reality","Because games are legally distinct from reality"], ans:0, exp:"Reality technically satisfies the other five criteria (physics, characters, real-time, shared, persistent), so Criterion 6 is needed to exclude it." },
{ topic:"Space & Place", q:"In Bartle's framework, how does a 'place' differ from a 'space'?", opts:["A place is virtual; a space is physical","A place is a space to which meaning is attributed","A space has inhabitants; a place does not","They are synonymous in virtual worlds"], ans:1, exp:"Drawing on Tuan (1977), Bartle notes that a place is a space to which meaning has been attributed. Spaces are moved through; places are moved to." },
{ topic:"Virtual Reality", q:"According to Bartle, drawing on the 1902 dictionary definition, a 'virtual X' is best understood as:", opts:["A digital copy of X","Something that is X","Something not X, but having the efficiency or effect of X","An imaginary version of X"], ans:2, exp:"The Peirce (1902) definition: 'A virtual X (where X is a common noun) is something, not an X, which has the efficiency (virtus) of an X.'" },
{ topic:"Characters & Avatars", q:"Which term refers to the VISUAL APPEARANCE of a character, regardless of whether it is a player or non-player character?", opts:["Agent","Character","Mobile","Avatar"], ans:3, exp:"Bartle defines 'avatar' as the visual appearance of a character. It is NOT the character itself, though the term is often misused to mean player character." },
{ topic:"Characters & Avatars", q:"A 'mobile' (or 'mob') in Bartle's terminology is:", opts:["An agent that is not a character","A group of hostile NPCs","A player's primary avatar","A companion NPC"], ans:0, exp:"A mobile is an individual agent that is not a character. Zombies, raccoons, and velociraptors are examples. The term does not refer to a group." },
{ topic:"Characters & Avatars", q:"What distinguishes a 'drone' from a 'companion' in Bartle's taxonomy?", opts:["A drone is hostile; a companion is friendly","A drone has limited freedom to act autonomously; a companion operates more self-sufficiently","A drone is always airborne","A companion is always an NPC"], ans:1, exp:"A drone is essentially a functional extension of the player character with very limited autonomous action, while a companion operates more self-sufficiently." },
{ topic:"Characters & Avatars", q:"According to Bartle, a 'critter' in modern virtual world terminology refers to:", opts:["Any NPC that can fight","A low-level enemy mob","Something that appears autonomous but doesn't interact — purely atmospheric","A pet that follows the player"], ans:2, exp:"A critter is something that looks to have autonomy but doesn't interact with anything — it's there for atmospheric or cosmetic reasons (e.g. butterflies, bunnies)." },
{ topic:"Characters & Avatars", q:"In Bartle's terminology, what is 'trash' in the context of a boss encounter?", opts:["Loot dropped by bosses","Broken or useless items","NPCs that give quests","Lesser mobs found before a boss"], ans:3, exp:"'Trash' is what lesser mobs before a boss are collectively called. An 'add' is a piece of trash called into play during the boss encounter itself." },
{ topic:"Design", q:"Bartle's preferred definition of 'design' is:", opts:["To imagine how something could be without first making it be","The creation of functional systems","Courses of action aimed at changing existing situations into preferred ones","The visual styling of user interfaces"], ans:0, exp:"Bartle's own definition: 'to design something is to imagine how it could be without first making it be.' He contrasts this with Simon's (1969) more cited definition." },
{ topic:"Design", q:"According to Bartle, what is the key distinction between design and art?", opts:["Design uses computers; art does not","In art you express yourself through the work; in design you do not","Design is commercial; art is not","Art is solo; design is collaborative"], ans:1, exp:"Bartle states: 'if you express yourself through this [process of designing] then it's art, not design.' He argues most game design is actually art." },
{ topic:"Virtual Worlds Sub-realities", q:"Bartle proposes that virtual worlds can legitimately be interpreted as 'sub-realities of Reality'. This is based on the distinction between:", opts:["Virtual and non-virtual","Physical and digital","Actual real (concrete existence) and ideal real (existence in mind)","Online and offline"], ans:2, exp:"Bartle uses the philosophical distinction between actual reality (concrete existence) and ideal reality (existence in mind) to argue VWs are 'ideally real' sub-realities." },
{ topic:"MMORPGs", q:"Bartle argues that the defining core of MMOs is NOT that they are games, but that they are:", opts:["Persistent","Massively multiplayer","Online","Places (realities)"], ans:3, exp:"Bartle states: 'being a game isn't the absolute core of what they are: that's the fact that they're places (realities, in fact).'" },

// ===== SOCIAL INTERACTION IN VR (Han & Bailenson) =====
{ topic:"Social VR", q:"The 'transformed social interaction' (TSI) framework (Bailenson et al., 2004) argues that which THREE dimensions can be transformed in a virtual system?", opts:["Sensory abilities, situational context, and self-representation","Latency, bandwidth, and resolution","Avatar design, world design, and physics","Language, gesture, and gaze"], ans:0, exp:"TSI identifies three transformable dimensions: sensory abilities (perceptual), situational context (spatial/temporal), and self-representation (appearance/behaviour)." },
{ topic:"Social VR", q:"In early VR social research, Bailenson et al. (2001) found that participants in a virtual environment gave personal space to a virtual agent. This suggests:", opts:["People treat all VR content as fictional","Social norms and cues persist as long as virtual others can show social cues","VR agents are indistinguishable from real people","Personal space is irrelevant in virtual environments"], ans:1, exp:"Participants respected social norms more for humanoid representations with realistic gaze — indicating social cues carry over into virtual environments." },
{ topic:"Social VR - Avatars", q:"According to Han & Bailenson, avatars serve two primary purposes. Which of the following is ONE of those primary purposes?", opts:["Providing the game's physics engine","Generating revenue for platform operators","Allowing users to feel embodied in the virtual environment","Rendering the virtual environment's graphics"], ans:2, exp:"Avatars: (1) allow users to feel embodied (psychologically experiencing the virtual body as their own), and (2) provide a visual communication partner." },
{ topic:"Social VR - Avatars", q:"Research by Kolesnichenko et al. (2019) found that avatar design practices across social VR platforms:", opts:["Were largely uniform and standardised","Were mainly determined by users' preferences","Had no significant impact on user behaviour","Differed significantly and impacted how people interact and form social relationships"], ans:3, exp:"Kolesnichenko et al. interviewed designers of six social VR platforms and found design decisions (movement, appearance, emotion expression) significantly shaped social experience." },
{ topic:"Social VR - Avatars", q:"The study by Han et al. (2023) on uniform vs self-avatars found that uniform avatars resulted in:", opts:["Lower motion synchrony but greater enjoyment","Higher motion synchrony and greater embodiment","Higher presence and more realistic perception","No significant differences"], ans:0, exp:"Uniform avatars led to lower motion synchrony, lower body presence, more cartoon-like perception — BUT greater enjoyment, suggesting context-dependent avatar choice." },
{ topic:"Social VR - Avatars", q:"The 'Proteus Effect' (Yee & Bailenson) in the context of avatar appearance refers to:", opts:["Avatars becoming more realistic over time","Behavioural change in users based on their own avatar's appearance","The phenomenon that avatars decay in quality","The difficulty of creating photorealistic avatars"], ans:1, exp:"Named after the shape-shifting Greek god Proteus, the Proteus Effect describes how users' behaviour conforms to the identity expectations of their avatar." },
{ topic:"Social VR - Ostracism", q:"Kassner et al. (2012) used the 'Cyberball' game in VR to study ostracism. What was found?", opts:["VR ostracism had no effect on participants","Participants ignored virtual ostracism","Ostracism in VR threatened basic human needs and was more powerful than face-to-face ostracism","Ostracism in VR improved performance"], ans:2, exp:"Ostracism in VR threatened the need to belong, control, self-esteem, and meaningful existence — and the authors found these negative effects were actually more powerful than in face-to-face settings." },
{ topic:"Social VR - Appearance", q:"DeVeaux et al. (2023) found that the greater the discrepancy between an avatar and a user's physical self:", opts:["The greater the sense of embodiment","The more enjoyable the experience","The more socially active the participant became","The less embodied the participant felt"], ans:3, exp:"Results showed a negative association between attribute discrepancy and embodiment — avatars that looked different from users' physical selves led to lower feelings of embodiment." },
{ topic:"Social VR - Behaviour", q:"Aburumman et al. (2022) studied head nodding in VR and found that participants approached the nodding agent MORE frequently. This suggests head nodding in VR signals:", opts:["Trustworthiness and approachability","Aggression","Lower intelligence","Disinterest"], ans:0, exp:"People went toward the nodding agent more often — head nodding signals turn-taking and interest, making the agent appear more trustworthy and approachable." },
{ topic:"Social VR - Place", q:"McVeigh-Schultz et al. (2019) found that in Facebook Spaces, tables were made CIRCULAR. The reason given was:", opts:["Circular tables save virtual space","To allow people to have similar eyelines during conversation","Circular shapes are easier to render","To distinguish VR from physical spaces"], ans:1, exp:"Designers intentionally made tables circular to equalise eyelines during conversations — a deliberate architectural choice to shape social expectations and behaviour." },
{ topic:"Social VR - Place", q:"Miller et al. (2021) studied conference rooms vs garages in VR and found teams in conference rooms had HIGHER synchrony. This was attributed to:", opts:["Better acoustics in conference rooms","Higher ceilings in garages causing distraction","The formality and lower ceiling of the conference room encouraging risk-reduction","Garages being too dark"], ans:2, exp:"The authors speculated the conference room's lower ceiling may have encouraged risk reduction and increased synchrony compared to the more open garage environment." },
{ topic:"Social VR - Perspective", q:"Hoppe et al. (2021) developed a 'social redirection' technique in VR. What did it achieve?", opts:["It redirected users to different servers","It removed lag in social VR","It generated automatic conversation topics","It allowed people to share the same perspective without overlapping avatars"], ans:3, exp:"The technique placed dyads in the same location and enabled perspective-sharing while preserving face-to-face arrangement, yielding greater social presence and teamwork." },
{ topic:"Social VR - Future", q:"Han & Bailenson identify 'mirror dwellers' or 'immersive dwellers' as a novel social behaviour unique to VR. What does this involve?", opts:["Users who wear avatars and spend hours staring at themselves in virtual mirrors in public spaces","Users who only use VR for mirrors","Users who create mirror-image copies of themselves","Users who refuse to interact with others"], ans:0, exp:"Zheng et al. (2023) describe immersive/mirror dwellers as individuals who wear (often expensive) avatars and spend hours staring at themselves in virtual mirrors in public VR spaces." },

// ===== AFFORDANCES (Gibson) =====
{ topic:"Affordance Theory", q:"Gibson coined the term 'affordance'. What does an affordance refer to?", opts:["The cost of an object","What the environment offers the animal — what it provides for good or ill","The physical properties of an object","The subjective perception of an object"], ans:1, exp:"'The affordances of the environment are what it offers the animal, what it provides or furnishes, either for good or ill.' Gibson invented the noun 'affordance'." },
{ topic:"Affordance Theory", q:"Gibson states that affordances are:", opts:["Purely subjective, existing only in the perceiver's mind","Purely objective physical properties","Neither purely objective nor subjective — they cut across this dichotomy","Entirely cultural constructs"], ans:2, exp:"'An affordance cuts across the dichotomy of subjective-objective... It is both physical and psychical, yet neither. An affordance points both ways, to the environment and to the observer.'" },
{ topic:"Affordance Theory", q:"In Gibson's theory, what is an ecological 'niche'?", opts:["A hiding place in the environment","A type of food source","A social group in animal ecology","A set of affordances offered by the environment to a species"], ans:3, exp:"Gibson proposes: 'I suggest that a niche is a set of affordances.' A niche refers more to how an animal lives than where it lives." },
{ topic:"Affordance Theory", q:"For a terrestrial surface to afford SUPPORT, Gibson says it must be (among other things):", opts:["Nearly horizontal, nearly flat, extended, and rigid relative to the animal","Coloured and textured","Vertical and smooth","Wet and non-rigid"], ans:0, exp:"Gibson specifies: 'If a terrestrial surface is nearly horizontal, nearly flat, and sufficiently extended...and if its substance is rigid...then the surface affords support.'" },
{ topic:"Affordance Theory", q:"According to Gibson, the key difference between an affordance and a Gestalt 'valence' (Lewin) is:", opts:["Valences are objective; affordances are subjective","Affordances don't change as the observer's need changes; valences were thought to depend on the observer's needs","Affordances require conscious perception; valences do not","They are functionally identical"], ans:1, exp:"'The affordance of something does not change as the need of the observer changes...the affordance, being invariant, is always there to be perceived.' Lewin's valences changed with need." },
{ topic:"Affordance Theory", q:"The 'visual cliff' experiment (Gibson & Walk, 1960) demonstrates which concept?", opts:["That infants can perceive depth","That affordances are learned","Misinformation for affordances — glass affords support but looks like it does not","That visual and haptic information always agree"], ans:2, exp:"The visual cliff shows misinformation: glass extends safely over a cliff's edge but the optical information still specifies depth/danger, causing infants to perceive it as unsafe." },
{ topic:"Affordance Theory", q:"Gibson argues that when we perceive objects, we primarily perceive:", opts:["Their colours and textures","Their weight and mass","Their relationship to other objects","Their affordances — what they offer or enable"], ans:3, exp:"'I now suggest that what we perceive when we look at objects are their affordances, not their qualities. We can discriminate dimensions of difference if required... but what the object affords us is what we normally pay attention to.'" },
{ topic:"Affordance Theory", q:"Gibson argues that young infants perceive:", opts:["Affordances first — meaning is observed before substance, surface, colour and form are seen as such","Qualities first, then affordances","Only colours and shapes","Nothing meaningful until language develops"], ans:0, exp:"'The affordance of an object is what the infant begins by noticing. The meaning is observed before the substance and surface, the colour and form, are seen as such.'" },
{ topic:"Affordance Theory", q:"Why does Gibson say a glass wall and a cloth curtain demonstrate important affordance principles?", opts:["Both afford walking through","A glass wall affords seeing through but not walking through; a cloth curtain affords going through but not seeing through","Both are transparent","Both are opaque"], ans:1, exp:"Glass affords visual perception but blocks locomotion; cloth blocks sight but allows passage. 'Architects and designers know such facts, but they lack a theory of affordances to encompass them in a system.'" },
{ topic:"Affordance Theory", q:"According to Gibson, what is the ecological definition of a 'seat'?", opts:["Any flat surface","A manufactured object designed for sitting","A surface that is horizontal, flat, extended, rigid, AND knee-high relative to the perceiver","Any object that supports the human body"], ans:2, exp:"Gibson argues any surface that is 'horizontal, flat, extended, rigid, and knee-high' affords sitting, regardless of whether it's natural (a ledge) or artificial (a chair)." },

// ===== UNCANNY VALLEY (Mori) =====
{ topic:"Uncanny Valley", q:"Masahiro Mori's 'Uncanny Valley' hypothesis proposes that as robots become more humanlike, human affinity:", opts:["Increases monotonically","Remains constant","Decreases steadily","Increases steadily then suddenly drops before rising again at near-perfect realism"], ans:3, exp:"Affinity rises with human likeness until a point where something 'almost but not quite human' causes a sudden drop into eeriness — the 'uncanny valley' — before rising again." },
{ topic:"Uncanny Valley", q:"Mori identifies which of the following as falling DEEPEST into the uncanny valley?", opts:["Prosthetic hands (especially moving ones)","Industrial robots","Toy robots","Bunraku puppets"], ans:0, exp:"Mori describes how a prosthetic hand that looks realistic but feels cold and limp creates deep unease. Movement amplifies this — a moving myoelectric hand would cause most people to recoil." },
{ topic:"Uncanny Valley", q:"Mori's recommendation for designers wishing to avoid the uncanny valley is to:", opts:["Always strive for maximum realism","Take the first peak (moderate human likeness) as the goal rather than trying to scale the second peak","Avoid making robots humanoid at all","Focus only on functional rather than visual design"], ans:1, exp:"Mori states: 'I recommend that designers instead take the first peak as their goal, which results in a moderate degree of human likeness and a considerable sense of affinity.'" },
{ topic:"Uncanny Valley", q:"According to Mori, movement affects the uncanny valley by:", opts:["Smoothing out the valley effect","Having no effect on affinity","Amplifying both the peaks and valleys of the affinity graph","Making all robots seem more human"], ans:2, exp:"'Movement is fundamental to animals...Its presence changes the shape of the uncanny valley graph by amplifying the peaks and valleys.' A prosthetic hand moving causes MORE eeriness." },
{ topic:"Uncanny Valley", q:"Mori links the uncanny valley to death by noting that when we die:", opts:["We become robot-like","We become completely unlike robots","Our affinity with machines increases","We move from the second peak (moving) to the uncanny valley (still), like a corpse"], ans:3, exp:"Mori: 'our death can be regarded as a movement from the second peak (moving) to the bottom of the uncanny valley (still).' He connects eeriness to our instinct for self-preservation." },
{ topic:"Uncanny Valley", q:"Mori gives EYEGLASSES as an example of good design to avoid the uncanny valley. Why?", opts:["They don't resemble eyeballs but their design has created a charming pair of 'new eyes'","They resemble real eyes perfectly","They are transparent and unobtrusive","They improve human vision perfectly"], ans:0, exp:"'Eyeglasses do not resemble real eyeballs, but one could say that their design has created a charming pair of new eyes. So we should follow the same principle in designing prosthetic hands.'" },
{ topic:"Uncanny Valley", q:"The 1970 World Exposition in Osaka demonstrated uncanny valley effects with a robot that had 29 facial muscles. What happened when the smile speed was halved?", opts:["The robot looked happier","The expression turned creepy instead of happy","The robot broke down","Audiences preferred the slower smile"], ans:1, exp:"'When the speed is cut in half...instead of looking happy, its expression turns creepy.' This shows how even a slight variation in movement can plunge something into the uncanny valley." },

// ===== DIGITAL TWIN / SMART DCU =====
{ topic:"Digital Twins", q:"A 'digital twin' (as defined in the Smart DCU paper) differs from a 'digital shadow' primarily because:", opts:["A digital twin is 3D; a shadow is 2D","A digital shadow is more accurate","A digital twin has bidirectional information exchange; a digital shadow is unidirectional","A digital twin is cheaper to create"], ans:2, exp:"Digital shadows are unidirectional (physical→virtual). Digital twins are bidirectional: information from physical systems is analysed and used to instruct changes in the physical system." },
{ topic:"Digital Twins", q:"The Smart DCU digital twin project was developed as a partnership between which institutions?", opts:["MIT, Harvard, and Stanford","University College Dublin and Trinity College Dublin","Google, Microsoft, and Meta","Insight SFI at DCU, Dublin City Council, Bentley Systems, and KTU"], ans:3, exp:"The Smart DCU digital twin was a partnership launched in 2021 between Insight SFI Research Centre at DCU, Dublin City Council, Bentley Systems, and Kaunas University of Technology (KTU)." },
{ topic:"Digital Twins", q:"In the Smart DCU project, drone imagery was captured at what altitude using DJI Ground Station Pro?", opts:["30-40 metres","10-20 metres","50-60 metres","100+ metres"], ans:0, exp:"The drone survey was executed as a grid shape at an altitude of 30 to 40 metres using the DJI Ground Station Pro app." },
{ topic:"Digital Twins", q:"Which software platform was used to process drone imagery into 3D digital models for Smart DCU?", opts:["Unreal Engine","Bentley Context Capture","Unity","Blender"], ans:1, exp:"Raw drone data was processed using Bentley's Context Capture (CC) platform to create digital models (reality data, point clouds) of the campus." },
{ topic:"Digital Twins", q:"What makes the Smart DCU project a 'digital twin' rather than merely a '3D digital model'?", opts:["It uses higher resolution imagery","It includes virtual reality walkthrough","It incorporates real-time IoT sensor data with bidirectional exchange","It was built by a university"], ans:2, exp:"The paper states: 'a digital model created from CC is only a digital asset resembling a campus, but it can't be called a digital twin unless there is an exchange of data with the physical world.'" },
{ topic:"Digital Twins", q:"Smart Dublin's approach to innovation is described as which model?", opts:["Single helix","Double helix","Pentagonal","Quadruple helix"], ans:3, exp:"Smart Dublin follows a 'Quadruple helix model of open innovation' building collaborative partnerships between technology providers, academia, government agencies, and people." },

// ===== SVR AFFORDANCES (Kukshinov et al.) =====
{ topic:"SVR Affordances", q:"Kukshinov et al. (2024) found that over a third of SVR users sometimes used the platform WITHOUT other people. This represents which type of affordance?", opts:["Hidden affordance","Perceptible affordance","False affordance","Designed affordance"], ans:0, exp:"Asocial use is identified as a 'hidden affordance' — not intended by designers but possible based on the design. Users negotiate new uses in opposition to the social-first design." },
{ topic:"SVR Affordances", q:"The paper categorises 'embodied communication' as a 'FALSE affordance' of social VR because:", opts:["Embodied communication works perfectly in SVR","Users perceive it as available but the technology does not reliably support the interactions it suggests","VR platforms intentionally discourage embodied communication","Users never attempt embodied communication"], ans:1, exp:"A false affordance appears usable but doesn't achieve expected purpose. Embodied communication in SVR is hampered by technology, leading users to rely on simplified vocal communication instead." },
{ topic:"SVR Affordances", q:"Kukshinov et al. found that the dominant form of communication in social VR was:", opts:["Non-verbal body language","Text chat","Vocal/speech communication","Gesture-based"], ans:2, exp:"87% of participants reported starting conversations with strangers exclusively vocally. Non-verbal communication, while possible, was used in simplified and exaggerated forms." },
{ topic:"SVR Affordances", q:"According to Kukshinov et al., what was a key problem with turn-taking in group SVR conversations?", opts:["The software enforced strict turn-taking","Users preferred text for turn-taking","SVR groups were too small for turn-taking issues","It was frequently chaotic with interruptions, yelling, and poor regulation"], ans:3, exp:"Social interactions in SVR were often described as 'always chaos and interruptions,' with users having to be 'loud and obnoxious' or yell to attract attention and take turns." },
{ topic:"SVR Affordances", q:"Shaw's (2017) framework applied to SVR suggests that users can decode technology in three ways. Which of the following is NOT one of Shaw's categories?", opts:["Neutral (ignoring the design)","Dominant (as designed)","Negotiated (rethinking the design)","Oppositional (going against the design)"], ans:0, exp:"Shaw's three decoding modes are: dominant (intended use), negotiated (rethinking), and oppositional (going against design). 'Neutral' is not one of Shaw's categories." },
{ topic:"SVR Affordances", q:"Kukshinov et al. found that women in their sample appreciated SVR partly because:", opts:["SVR offers better graphics","They did not feel they were being watched or judged through the use of an avatar","SVR was cheaper than other social platforms","Avatars allowed them to be more aggressive"], ans:1, exp:"Some women found it comforting to be less visible through avatars, reporting they didn't feel watched or judged. As one participant noted, people could judge them on their characters and words." },
{ topic:"SVR Affordances", q:"The 'unreal' dimension identified by Kukshinov et al. refers to users valuing SVR's:", opts:["Poor graphics quality","Randomness and unpredictability","Increased control over social situations — e.g. muting others, leaving instantly","Inability to replicate real life"], ans:2, exp:"The 'unreal' affordance relates to control: muting others, leaving conversations without social cost, and anonymity — features impossible in physical social settings." },
{ topic:"SVR Affordances", q:"Nagy and Neff's (2015) concept of 'imagined affordances' suggests that:", opts:["Affordances only exist in the imagination","All affordances are real and objective","Users always use technology as designers intend","Technologies and affordances are adaptive, learning, and responsive to users — and are affected by how users are imagined by designers"], ans:3, exp:"Nagy and Neff argue technologies are adaptive and changing along with users. Affordances are affected by how users are imagined by designers and by uses imagined in technological contexts." },

// ===== METAVERSE IDENTITY (Szita et al.) =====
{ topic:"Metaverse Identity", q:"Szita et al. (2025) argue that digital identity in metaverse environments has two key dimensions. What are they?", opts:["Personal identity dimension and data-specific dimension","Visual and audio dimensions","Physical and virtual dimensions","Social and economic dimensions"], ans:0, exp:"The paper proposes: 'digital identity in metaverse environments is defined by two dimensions—a personal and a data-specific dimension—that mark its novelty.'" },
{ topic:"Metaverse Identity", q:"The 'Proteus Effect' (Yee & Bailenson, 2007) as referenced by Szita et al. refers to:", opts:["Avatars degrading over time","Users adapting behaviours to align with characteristics assigned to their virtual identity","The difficulty of changing avatars once created","The process of creating photorealistic avatars"], ans:1, exp:"The Proteus Effect: users adapt different behaviours to align with characteristics conceptualised and assigned to their new virtual identity. XR enhances this by enabling embodiment." },
{ topic:"Metaverse Identity", q:"Matthew Ball's (2022) formal definition of the metaverse describes it as a 'massively scaled and interoperable network'. Which feature is central to his definition?", opts:["It must be free to use","It must use blockchain technology","Continuity of data including identity, history, entitlements, objects, communications, and payments","It must be managed by a single company"], ans:2, exp:"Ball defines the metaverse as requiring 'continuity of data, such as identity, history, entitlements, objects, communications, and payments' experienced synchronously and persistently." },
{ topic:"Metaverse Identity", q:"Szita et al. identify which specific risk associated with idealised avatar creation?", opts:["Server overloads","Loss of social connections","Economic fraud","Negative body image, unrealistic beauty standards, and potential connection to body dysmorphia"], ans:3, exp:"The paper warns that embodying idealised virtual bodies may contribute to negative body image. They note concern about trends like patients requesting AR filter-inspired plastic surgery." },
{ topic:"Metaverse Identity", q:"'Online disinhibition' in the context of the metaverse refers to:", opts:["Individuals self-disclosing or acting out more frequently or intensely than in real life when a new identity is adopted","Improved communication due to anonymity","The tendency to ignore online social norms","The reduction of lag in online environments"], ans:0, exp:"Suler (2004), cited by Szita et al., identifies benign disinhibition (kindness, sharing) and toxic disinhibition (rude, threatening, salacious behaviour) as outcomes of adopting new virtual identities." },
{ topic:"Metaverse Identity", q:"Federated learning is proposed by Szita et al. as a privacy solution because:", opts:["It makes avatars more realistic","It allows machine learning on decentralised data that remains on the user's device — without transfer to a central server","It encrypts all avatar data","It prevents users from sharing personal information"], ans:1, exp:"Federated learning allows training models on data that stays on users' devices, avoiding transfer to a vulnerable central server — protecting privacy while improving performance." },
{ topic:"Metaverse Identity", q:"Szita et al. warn that the metaverse's unprecedented data collection includes which types of physiological data not commonly collected by social media?", opts:["Text messages and photos","Browser history and location","Biosignals, body features, voice, and movement data","Email content"], ans:2, exp:"The metaverse can collect 'biometric signals, voice, movement, and other potentially identifiable physiological data' through HMDs, biometric wearables, motion capture suits, or brain-computer interfaces." },

// ===== PROTEUS EFFECT (Yee & Bailenson) =====
{ topic:"Proteus Effect", q:"In Yee & Bailenson's (2007) Experiment 1, participants assigned MORE ATTRACTIVE avatars:", opts:["Kept a greater distance from the confederate","Disclosed less personal information","Became more aggressive","Walked CLOSER to the confederate and disclosed MORE information"], ans:3, exp:"Participants in attractive conditions walked significantly closer (M=0.98m vs 1.74m) and revealed more information (M=7.19 vs 5.42 pieces) — supporting the Proteus Effect." },
{ topic:"Proteus Effect", q:"In Yee & Bailenson's Experiment 2, participants with TALLER avatars in a negotiation task:", opts:["Made MORE unfair splits in their own favour","Were more likely to accept unfair offers","Were more cooperative","Showed no significant difference"], ans:0, exp:"Participants in the tall condition split money significantly more in their own favour. Short-avatar participants were about twice as likely to accept an unfair offer — showing height influenced confidence." },
{ topic:"Proteus Effect", q:"The Proteus Effect is theoretically grounded in which two psychological theories?", opts:["Cognitive dissonance and social identity theory","Self-perception theory (Bem) and deindividuation theory","Attachment theory and operant conditioning","Social learning theory and attribution theory"], ans:1, exp:"The Proteus Effect draws on Bem's (1972) self-perception theory (we infer our own attitudes from our behaviours) and deindividuation theory (identity cues become more influential when deindividuated)." },
{ topic:"Proteus Effect", q:"The key methodological innovation in Yee & Bailenson's experiments to isolate the Proteus Effect was:", opts:["Using brain scanning to measure neural responses","Using identical avatars for all participants","Having the confederate remain blind to the participant's avatar condition","Testing participants in the dark"], ans:2, exp:"The confederate always saw the participant's avatar as untextured (Exp.1) or same height (Exp.2) — preventing behavioural confirmation, thus isolating the Proteus Effect from external social responses." },
{ topic:"Proteus Effect", q:"The Proteus Effect differs from SIDE (Social Identity Model of Deindividuation Effects) theory because:", opts:["They are identical theories with different names","SIDE theory is about online behaviour; Proteus is about offline","The Proteus Effect is older","The Proteus Effect emphasises individual identity cues rather than conformity to local group norms"], ans:3, exp:"SIDE emphasises conformity to local group norms. The Proteus Effect emphasises conformity to individual identity cues (e.g., one's own avatar), and would operate even when the user is alone." },
{ topic:"Proteus Effect", q:"Yee & Bailenson found that in online games, most available avatars are:", opts:["Youthful, in shape, and attractive — the choices are often limited","Realistic representations of actual users","Random and diverse","Old and unattractive"], ans:0, exp:"They note that many online environments only offer youthful, in-shape, attractive avatars (e.g., There.com where 'old people do not exist'), limiting users' authentic self-representation." },
{ topic:"Proteus Effect", q:"The name 'Proteus Effect' comes from the Greek God Proteus, who was notable for:", opts:["Being the god of time","The ability to take on many different self-representations (being protean)","Being the god of the sea","Creating the first virtual world"], ans:1, exp:"Proteus was the Greek god notable for being the origin of the adjective 'protean' — the ability to take on many different self-representations. This maps to avatar identity change in VR." },

// ===== MIXED / ADDITIONAL =====
{ topic:"Social VR Platforms", q:"Which social VR platform allows users to upload their own built avatars giving maximum creative freedom?", opts:["RecRoom","Bigscreen","VRChat","Facebook Spaces"], ans:2, exp:"Kolesnichenko et al. (2019) note that VRChat gave users the freedom to experiment by allowing them to upload their own built avatars, unlike platforms with more restrictive systems." },
{ topic:"Social VR Platforms", q:"In RecRoom (as described in the literature), facial expressions for avatars are designed to:", opts:["Express a full range of human emotions","Allow users to choose any expression at any time","Mirror the user's actual face via front-camera","Only express happiness, so everyone looks friendly"], ans:3, exp:"McVeigh-Schultz et al. (2019) note that in RecRoom, facial expressions are limited to express happiness so that everyone looks friendly — which can be problematic for expressing non-positive emotions." },
{ topic:"Virtual Worlds History", q:"Bartle states that the term 'MMO' is often used as a short form for:", opts:["MMORPG","Massively Multiplayer Online (any genre)","Mobile Multiplayer Online","Meta Multiplayer Online"], ans:0, exp:"Bartle notes: 'MMO is usually the short form of MMORPG (which is how I'll be using it here).' The MMORPG acronym is 'so unwieldy that it has its own abbreviation.'" },
{ topic:"Virtual Worlds Criteria", q:"A two-player game is NOT automatically a virtual world according to Bartle, but a one-or-two-player game MAY be. Why?", opts:["Because two-player games are too simple","Because persistence (criterion 5) requires the world to continue when either player leaves — a fixed two-player requirement prevents this","Because two players cannot share the same space","Because real-time interaction requires more than two players"], ans:1, exp:"Criterion 4 (Shared) requires support for a VARYING number of players. A game requiring exactly two fails persistence as it can't allow players to join/leave freely." },
{ topic:"Affordance Theory", q:"Gibson argues that the human alteration of the natural environment (cutting, clearing, paving, building) is motivated by:", opts:["Artistic expression","Economic profit","The desire to change what the environment affords","Scientific curiosity"], ans:2, exp:"'Why has man changed the shapes and substances of his environment? To change what it affords him. He has made more available what benefits him and less pressing what injures him.'" },
{ topic:"Social VR Research", q:"Herrera et al. (2018) found that an avatar limiting people's nonverbal abilities in the virtual world leads to:", opts:["Increased creativity in other areas","Greater emotional expression","No effect on physical world behaviour","Reduced nonverbal behaviour in the physical world"], ans:3, exp:"The authors concluded: 'being represented by an avatar that limits people's nonverbal abilities in the virtual world leads to reduced nonverbal behavior in the physical world.'" },
{ topic:"Digital Twins", q:"DCU has how many campuses that were surveyed for the digital twin project?", opts:["Four","Two","Three","Five"], ans:0, exp:"DCU has four campuses: Glasnevin, All Hallows, St. Patrick's, and Alpha — each was surveyed by drone for the digital twin project." },
{ topic:"Affordance Theory", q:"Gibson uses the word 'affordance' because it 'refers to both the environment AND the animal in a way that no existing term does.' This implies:", opts:["Affordances are always positive","The complementarity of the animal and the environment","Affordances are universal across species","The environment exists independently of any observer"], ans:1, exp:"'It implies the complementarity of the animal and the environment.' Affordances are relational — they describe neither a purely objective property nor a purely subjective one." },
{ topic:"Uncanny Valley", q:"The Bunraku puppet occupies which position in Mori's affinity graph?", opts:["Near the origin (low human likeness, low affinity)","Near the bottom of the uncanny valley","Between the two peaks with moderate-to-high affinity","At the second peak (human-level affinity)"], ans:2, exp:"Mori places the Bunraku puppet between the uncanny valley and the second peak. Despite limited realism, theatrical distance and total appearance (including movement) creates relatively high affinity." },
{ topic:"Metaverse Identity", q:"Szita et al. identify 'surveillance capitalism' (Zuboff, 2019) as relevant to the metaverse because:", opts:["The metaverse will be free of advertising","The metaverse will be regulated more strictly than social media","Social media has no relevance to the metaverse","The metaverse could collect unprecedented ranges of personal data for commercial purposes, surpassing social media"], ans:3, exp:"The paper argues the metaverse may 'collect a hitherto unseen range of personal data for commercial purposes,' extending beyond demographic data to biometric signals, movement, and physiological data." },
{ topic:"Social VR - Similarity", q:"Shih et al. (2023) found that participants changed their choice most often when interacting with a confederate whose avatar was:", opts:["Moderately similar to their own","Identical to their own","Completely dissimilar to their own","Clearly more attractive than their own"], ans:0, exp:"The similarity-attraction effect: participants were most persuaded by moderately similar avatars. Identical avatars may have obstructed agency and caused confusion." },
{ topic:"Social VR Research", q:"Roth et al. (2018) found that in social VR, gaze can be synthesised or augmented. Compared to random gaze, NATURAL gaze led to:", opts:["No significant differences","Greater rapport, interpersonal attraction, and perceived naturalness","Lower rapport and less attraction","More confusion"], ans:1, exp:"'Compared to random gaze, the natural gaze led to greater rapport scores, interpersonal attraction, and perceived behavioral naturalness.' Random gaze benefited from artificial augmentation to social gaze." },
{ topic:"SVR Affordances", q:"Kukshinov et al. describe emotional expressions in social VR as predominantly:", opts:["Rich, varied, and nuanced","Primarily conveyed through facial tracking","Simplistic, broad, and primarily vocal","Limited to text-based emojis"], ans:2, exp:"Emotional expressions are described as simplistic and broad — joy/excitement, sadness, and anger being most common — with vocal communication dominating over embodied emotional expression." },
{ topic:"Affordance Theory", q:"Gibson argues that his concept of affordances rescues us from 'the philosophical muddle of assuming fixed classes of objects'. This is because:", opts:["Affordances are universal across cultures","Objects only have one affordance","Affordances replace the need for language","To perceive an affordance is not to classify an object — a stone can be missile, paperweight, hammer, or bookend"], ans:3, exp:"'The theory of affordances rescues us from the philosophical muddle of assuming fixed classes of objects, each defined by its common features.' A stone's affordances are multiple and context-dependent." },
{ topic:"Virtual Worlds Criteria", q:"A live-action role-playing game (LARP) is NOT a virtual world because:", opts:["It overlays the physics of Reality rather than implementing its own physics","It involves too many people","It is not real-time","It does not have characters"], ans:0, exp:"Bartle: 'A live-action role-playing game (LARP) is not a virtual world because it overlays the physics of Reality, rather than implementing its own physics.'" },
{ topic:"Social VR - Place", q:"Han et al. (2023) found that being in SPACIOUS, PANORAMIC virtual environments (vs constrained ones) led to:", opts:["Lower enjoyment and more anxiety","Increased motion synchrony, perceived restorativeness, entitativity, pleasure, and enjoyment","No significant differences in social behaviour","Reduced interaction between group members"], ans:1, exp:"Spacious, panoramic environments led to higher motion synchrony, restorativeness, entitativity, pleasure, arousal, presence, enjoyment, and realism compared to constrained environments." },
{ topic:"Digital Twins", q:"The Smart DCU paper identifies which as a key challenge when scaling digital twins from campus to city level?", opts:["Lack of drone technology","Cost of computing power","Multiple city departments, lack of standard data models, inaccurate information sources, interoperability issues, lack of trained staff, and bureaucratic challenges","Public resistance to digital twins"], ans:2, exp:"The paper specifically lists these scaling challenges: 'multiple city departments, lack of standard data models, inaccurate information sources, interoperability issues, lack of trained staff, and bureaucratic challenges.'" },
{ topic:"Proteus Effect", q:"Yee & Bailenson suggest the Proteus Effect could be used therapeutically because:", opts:["Virtual environments are cheaper than therapy","VR therapy is more engaging","Avatars can be programmed to give advice","Users spending time with tall, attractive avatars might become more confident and friendly in real life"], ans:3, exp:"'Do users who frequently use tall and attractive avatars become more confident and friendly in real life? If so, virtual environments may be an excellent venue for therapeutic purposes.'" },
{ topic:"Characters & Avatars", q:"Bartle states he 'originated the term mobile'. At the time of its origin, the term 'mobile' included:", opts:["NPCs as well","Only hostile creatures","Only flying creatures","Only player-controlled entities"], ans:0, exp:"Bartle notes in a footnote: 'I can say this with some authority because I originated the term \"mobile.\" Then again, it included NPCs at the time, so perhaps not.'" },
{ topic:"Social VR", q:"Behavioral realism in VR refers to:", opts:["The graphical fidelity of avatars","How naturalistic and similar an avatar's behaviours are to those in the physical world","The accuracy of physics simulation","The realism of virtual environments"], ans:1, exp:"'Behavioral realism refers to how naturalistic and similar an avatar's behaviors are to those found in the physical world' — including movement speed, gaze, and head movement." },
{ topic:"Affordance Theory", q:"What does Gibson mean by 'misinformation for affordances'?", opts:["False advertising about products","When animals give misleading signals","When the optical or other information available leads to misperception of what an environment actually affords","When humans deliberately disguise affordances"], ans:2, exp:"Misinformation: when available information (optical or otherwise) leads to misperception. The visual cliff gives false optical information (air below) despite glass affording support." },
{ topic:"Virtual Worlds Criteria", q:"According to Nevelsteen (2018), cited by Bartle, how many criteria in total were found across competing definitions of virtual worlds?", opts:["6","12","50","23"], ans:3, exp:"Nevelsteen (2018) analysed numerous competing definitions and found 23 criteria in total, which he then condensed into a single comprehensive definition." },
{ topic:"Social VR", q:"The 'presence' experience in VR (Lombard & Ditton, 1997) refers to:", opts:["The subjective experience of being present in the mediated environment","The number of users in a virtual space","The quality of the graphics in VR","The latency of the VR system"], ans:0, exp:"Presence is 'the subjective experience of being present in the mediated environment' — the technological capacity to generate realistic immersive experiences allows this sense of presence." },
{ topic:"Metaverse Identity", q:"Szita et al. warn that the metaverse's design can 'delineate legitimate identities' by:", opts:["Requiring real-name authentication","Limiting customisation options — e.g. only binary gender choices or a limited range of body types","Preventing users from changing avatars frequently","Requiring avatars to match real appearance"], ans:1, exp:"If a platform only enables binary gender or lacks options for diverse body types, skin colours, or religious expressions, 'it will strengthen social biases and stigma against marginalized groups.'" },
{ topic:"SVR Affordances", q:"In the Kukshinov et al. study, what percentage of their final sample was female?", opts:["54%","31%","41%","18%"], ans:2, exp:"After screening, the analysis included 100 participants: 41 female, 54 male, and 5 non-binary participants." },
{ topic:"Social VR Platforms", q:"According to Kukshinov et al., which platform was used by the most participants as their primary SVR platform?", opts:["RecRoom","Meta Horizon Worlds","BigScreen","VRChat"], ans:3, exp:"48 participants identified VRChat as their primary platform, followed by 28 using Meta Horizon Worlds, 11 BigScreen, and 6 RecRoom." },
{ topic:"Virtual Worlds Criteria", q:"Which of Bartle's six criteria is the ONLY one that excludes Reality itself from being a virtual world?", opts:["Criterion 6 (Not Reality)","Criterion 2 (Characters)","Criterion 3 (Real-time)","Criterion 5 (Persistent)"], ans:0, exp:"Criteria 1-5 are all satisfied by Reality. Criterion 6 is the only criterion that explicitly excludes the actual world, preventing the definition from being circular." },
{ topic:"Virtual Worlds Criteria", q:"Bartle uses 'physics' for Criterion 1 in an unusual way. What does he actually mean by it?", opts:["Newtonian laws of motion and gravity","The underlying automated rule set that defines what can be done","The rendering engine that draws the world","The collision detection and pathfinding system"], ans:1, exp:"Bartle uses 'physics' metaphorically — it refers not to Newtonian mechanics but to the complete, automated rule set governing the virtual world, i.e. the fundamental laws of that world." },
{ topic:"Space & Place", q:"Bartle draws on Tuan (1977) for the space/place distinction. Spaces become places when:", opts:["They are mapped and officially labelled","They are large enough to support multiple players","They are rendered convincingly in three dimensions","Meaning is attributed to them through experience or attachment"], ans:3, exp:"Tuan's humanist geography argues that undifferentiated space becomes place when endowed with value through experience. Bartle applies this directly to virtual environments." },
{ topic:"Design", q:"Simon's (1969) definition of design, which Bartle contrasts with his own, is best summarised as:", opts:["'To imagine how something could be without first making it be'","'The iterative art of problem-solving under constraints'","'Courses of action aimed at changing existing situations into preferred ones'","'The process of devising artefacts that do not yet exist'"], ans:2, exp:"Simon: design as 'courses of action aimed at changing existing situations into preferred ones.' Bartle prefers his own: 'to imagine how something could be without first making it be.'" },
{ topic:"Characters & Avatars", q:"In Bartle's taxonomy, an 'agent' refers most broadly to:", opts:["A human player currently controlling a character","A software bot that plays the game autonomously","A non-player character that has scripted dialogue","Any entity within the virtual world that can act — including both player characters and NPCs"], ans:3, exp:"An agent in Bartle's framework is any entity capable of acting — encompassing both player characters and non-player characters. It is the broadest actor category in his taxonomy." },
{ topic:"Characters & Avatars", q:"According to Bartle, the term 'avatar' is technically the visual appearance of a character. How is it commonly misused?", opts:["It is used to mean any non-player character in the world","It is used to mean the player's character rather than solely its visual appearance","It is used to describe the entire game environment","It is used interchangeably and correctly with 'agent'"], ans:1, exp:"Players say 'my avatar' when they mean 'my character'. Bartle notes the confusion: avatar properly refers only to visual appearance, not the character entity itself." },
{ topic:"Affordance Theory", q:"Gibson explicitly states that an affordance is 'invariant'. What does this mean?", opts:["It changes depending on the observer's current emotional state","It only exists when being actively perceived","It varies with environmental conditions like weather or light","It remains constant regardless of who perceives it — it does not change as needs change"], ans:3, exp:"Invariance means the affordance is always there regardless of needs or perceptions. The postbox always affords letter-mailing whether or not the observer has a letter to post." },
{ topic:"Affordance Theory", q:"Gibson states that 'Physics may be value-free, but ecology is not.' This means:", opts:["Every substance, surface, or layout has affordances for benefit or injury — ecological perception is inherently about value","Ecological science is biased","Physics and ecology are incompatible","Ecologists are moral scientists"], ans:0, exp:"Perceiving an affordance 'is not a process of perceiving a value-free physical object to which meaning is somehow added...it is a process of perceiving a value-rich ecological object.'" },
{ topic:"Uncanny Valley", q:"Mori suggests the eerie sensation triggered by the uncanny valley is likely:", opts:["A learned cultural response","An integral part of our instinct for self-preservation — protecting us from proximal dangers like corpses and members of different species","A response to poor craftsmanship","A sign of aesthetic sophistication"], ans:1, exp:"Mori: 'I have no doubt it is an integral part of our instinct for self-preservation. The sense of eeriness is probably a form of instinct that protects us from proximal...sources of danger.'" },
{ topic:"Metaverse Identity", q:"Szita et al. cite the 'Cambridge Analytica case' as an example of:", opts:["Successful data security","The benefits of AI in social networks","Personalised commercial recommendations that steered consumer (and voter) behaviour through user data","How avatar design influences politics"], ans:2, exp:"The Cambridge Analytica case is cited as a famous demonstration of user data being used for personalised recommendations that 'imbricate users in sophisticated stimulus-response mechanisms.'" },
{ topic:"Social VR Research", q:"Hasenbein et al. (2022) found in a virtual classroom study that students in the BACK of the class:", opts:["Were more focused on the instructor","Learned more effectively","Had greater presence","Were more uniformly focused across the lesson screen AND classmates"], ans:3, exp:"Back-seated students had gaze more uniformly distributed across lesson screen and classmates, while front-seated students focused more on the instructor and lesson screen." },
{ topic:"SVR Affordances", q:"According to Kukshinov et al., combining talking and walking simultaneously in SVR was frequently described as problematic because:", opts:["It is hard to focus on conversation while navigating virtually; people can run into different places mid-conversation","VR equipment is too heavy to walk and talk","Social norms prohibit it","The audio cuts out during movement"], ans:0, exp:"'There is a fundamental issue with combining two of the most basic social and physical affordances in SVR, i.e., talking and walking simultaneously' — navigation and conversation compete for attention." },
{ topic:"Digital Twins", q:"The Bentley 4DA (4D Analytics) platform is used in Smart DCU primarily for:", opts:["Creating photorealistic renders","Streaming, integrating, analysing and storing IoT sensor data from multiple sources in a single platform","Generating drone flight paths","Building VR walkthroughs of campus"], ans:1, exp:"4DA is used to 'stream, integrate, analyse and store data from the devices in a single platform,' addressing the problem of siloed sensor data from different partners." },
{ topic:"Characters & Avatars", q:"Bartle argues that game studios are typically credited for games rather than individual designers. He compares this to:", opts:["The music industry crediting record labels","The book industry crediting publishers","The early film studio system where studios (not directors) got credit — until the auteur movement","Sports teams crediting owners not players"], ans:2, exp:"Bartle compares current games crediting to the era when 'people went to watch an MGM musical, not a Harry Beaumont... musical' — before directors gained name recognition." },
{ topic:"Social VR - Avatars", q:"Patotskya et al. (2023) studied how people avoid others in VR based on movement patterns. People more readily chose to pass by an agent displaying which personality trait?", opts:["Neuroticism (rapid, indirect movement)","Extroversion (loud, expressive)","Agreeableness (nodding, open posture)","Emotional stability (calm, controlled gestures)"], ans:3, exp:"Participants more readily exited through the door blocked by the emotionally stable agent and left more space between themselves and the neurotic agent — suggesting VR nonverbal cues signal personality." },
{ topic:"Virtual Worlds Definition", q:"How does Bartle distinguish between a 'world' and any sub-reality? What makes inhabitants of virtual worlds treat them as worlds?", opts:["Size and graphical fidelity","The presence of NPCs","The number of concurrent users","Inhabitants regard them as mainly self-contained spaces of interaction"], ans:3, exp:"Bartle: a world is 'a space of interaction that the inhabitants of which regard as being mainly self-contained.' The word 'mainly' allows for inhabitants' awareness of worlds beyond." },
{ topic:"SVR Affordances", q:"Nagy and Neff's (2015) 'imagined affordances' concept adds to Gibson's framework by emphasising:", opts:["That affordances only count if they can be consciously imagined in advance","Technologies and affordances are shaped by how designers imagine users and how users imagine uses — affordances are co-constructed","All valid affordances must be explicitly imagined before they can be utilised","Imagined affordances are always equivalent to false affordances in the Norman tradition"], ans:1, exp:"Nagy and Neff argue affordances are co-constructed: shaped by how designers imagine typical users and how users imagine possible uses. Affordances are not fixed features but ongoing social negotiations." },
{ topic:"Digital Twins", q:"DCU has how many campuses, all surveyed for the Smart DCU digital twin?", opts:["Two campuses in North Dublin only","Three campuses — Glasnevin, St Patrick's, and All Hallows","Four campuses — Glasnevin, All Hallows, St Patrick's, and Alpha","Five campuses including a satellite campus in the UK"], ans:2, exp:"DCU has four campuses: Glasnevin (main), All Hallows, St Patrick's, and Alpha — all surveyed by drone photogrammetry for the Smart DCU digital twin project." },

];

// ============================================================
// QUIZ ENGINE
// ============================================================
const TOTAL_Q    = 50;
const PRACTICE_Q = 10;
const TIME_LIMIT = 40 * 60;

let questions    = [];
let currentQ     = 0;
let score        = 0;
let wrongAnswers = [];
let timerInterval = null;
let timeLeft     = TIME_LIMIT;
let answered     = false;
let isPractice   = false;
let totalQCount  = TOTAL_Q;
let bestScore    = JSON.parse(localStorage.getItem('vw_best') || 'null');
let totalAttempts = parseInt(localStorage.getItem('vw_attempts') || '0');

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initHome() {
  document.getElementById('home-db-count').textContent = ALL_QUESTIONS.length;
  document.getElementById('home-total-q').textContent  = TOTAL_Q;
}

function startQuiz(practice) {
  isPractice  = !!practice;
  totalQCount = isPractice ? PRACTICE_Q : TOTAL_Q;
  timeLeft    = isPractice ? 10 * 60 : TIME_LIMIT;

  questions    = shuffle(ALL_QUESTIONS).slice(0, totalQCount);
  currentQ     = 0;
  score        = 0;
  wrongAnswers = [];
  answered     = false;

  showScreen('quiz');
  renderQuestion();
  startTimer();
}

function renderQuestion() {
  const q       = questions[currentQ];
  const pct     = (currentQ / totalQCount) * 100;
  const letters = ['A', 'B', 'C', 'D'];
  const shuffled = shuffle(q.opts.map((o, i) => ({ text: o, origIdx: i })));

  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('q-counter').textContent     = 'Question ' + (currentQ + 1) + ' of ' + totalQCount;
  document.getElementById('q-text').innerHTML          = '<span class="tag">' + q.topic + '</span><br>' + q.q;
  document.getElementById('feedback-bar').className    = 'feedback-bar';
  answered = false;

  document.getElementById('options-grid').innerHTML = shuffled.map((opt, i) =>
    '<button class="option-btn" onclick="selectAnswer(this,' + opt.origIdx + ')">' +
    '<span class="opt-letter">' + letters[i] + '</span>' +
    '<span>' + opt.text + '</span>' +
    '</button>'
  ).join('');
}

function selectAnswer(btn, selectedOrigIdx) {
  if (answered) return;
  answered = true;

  const q       = questions[currentQ];
  const correct = q.ans === selectedOrigIdx;

  document.querySelectorAll('.option-btn').forEach(function(b) { b.disabled = true; });
  btn.classList.add(correct ? 'correct' : 'wrong');

  document.querySelectorAll('.option-btn').forEach(function(b) {
    var m = b.getAttribute('onclick').match(/selectAnswer\(this,\s*(\d+)\)/);
    if (m && parseInt(m[1]) === q.ans) b.classList.add('correct');
  });

  if (correct) {
    score++;
  } else {
    wrongAnswers.push({ q: q.q, selected: q.opts[selectedOrigIdx], correct: q.opts[q.ans], exp: q.exp, topic: q.topic });
  }

  var fb = document.getElementById('feedback-bar');
  fb.className = correct ? 'feedback-bar correct show' : 'feedback-bar wrong show';
  document.getElementById('fb-title').textContent       = correct ? '✅ Correct!' : '❌ Incorrect';
  document.getElementById('fb-explanation').textContent = q.exp;

  setTimeout(nextQuestion, 1800);
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= totalQCount) {
    endQuiz(false);
  } else {
    renderQuestion();
    document.getElementById('feedback-bar').className = 'feedback-bar';
  }
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(function() {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) { clearInterval(timerInterval); endQuiz(true); }
  }, 1000);
}

function updateTimerDisplay() {
  var m     = Math.floor(timeLeft / 60);
  var s     = timeLeft % 60;
  var badge = document.getElementById('timer-badge');
  badge.textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  if      (timeLeft <= 60)  badge.className = 'timer-badge danger';
  else if (timeLeft <= 300) badge.className = 'timer-badge warn';
  else                      badge.className = 'timer-badge';
}

function endQuiz(timeout) {
  clearInterval(timerInterval);
  totalAttempts++;
  localStorage.setItem('vw_attempts', totalAttempts);
  if (!bestScore || score > bestScore.score) {
    bestScore = { score: score, total: totalQCount };
    localStorage.setItem('vw_best', JSON.stringify(bestScore));
  }
  showScreen('results');
  renderResults(timeout);
  if (score / totalQCount >= 0.7) fireConfetti();
}

var motivations = [
  "Every expert was once a beginner. Keep going! 🚀",
  "Learning is not attained by chance; it must be sought with ardour. 📚",
  "The secret of getting ahead is getting started. ✨",
  "Progress over perfection — you're building something great. 💪",
  "Virtual worlds are complex; your understanding grows with every attempt. 🌐",
  "Even Bartle didn't design MUD1 overnight. Keep exploring! 🎮",
  "Each wrong answer is a stepping stone to mastery. 🧠",
  "Gibson said affordances are always there to be perceived — so is your potential! 🌱",
  "The uncanny valley of learning is temporary. Push through! 🤖",
  "Your avatar grows stronger with every quest. 🛡️",
];

function getGrade(pct) {
  if (pct >= 90) return 'Outstanding! 🏆';
  if (pct >= 80) return 'Excellent! 🌟';
  if (pct >= 70) return 'Great job! ✅';
  if (pct >= 60) return 'Good effort! 📈';
  if (pct >= 50) return 'Keep going! 💪';
  return 'More practice needed! 📚';
}

function renderResults(timeout) {
  var pct = Math.round((score / totalQCount) * 100);

  document.getElementById('results-score').textContent     = score + '/' + totalQCount;
  document.getElementById('results-label').textContent     = (timeout ? '⏰ Time\'s Up! ' : '') + getGrade(pct);
  document.getElementById('results-motivation').textContent = '"' + motivations[Math.floor(Math.random() * motivations.length)] + '"';
  document.getElementById('sum-correct').textContent       = score;
  document.getElementById('sum-wrong').textContent         = totalQCount - score;
  document.getElementById('sum-pct').textContent           = pct + '%';

  var incSection = document.getElementById('incorrect-section');
  if (wrongAnswers.length === 0) {
    incSection.innerHTML = '<div style="text-align:center;padding:24px;font-size:32px;">🎉 Perfect Score! 🎉<br><small style="font-size:14px;color:#AFAFAF;font-weight:700">You answered every question correctly!</small></div>';
    return;
  }

  var html = '<div class="incorrect-title">❌ Review Incorrect Answers <span style="font-size:14px;color:#AFAFAF;font-weight:700">(' + wrongAnswers.length + ' missed)</span></div>';
  wrongAnswers.forEach(function(w, i) {
    html += '<div class="incorrect-item">' +
      '<div class="inc-q">' + (i + 1) + '. ' + w.q + '</div>' +
      '<div class="inc-row wrong-ans"><span class="label">Your answer: </span><span class="val">❌ ' + w.selected + '</span></div>' +
      '<div class="inc-row right-ans"><span class="label">Correct answer: </span><span class="val">✅ ' + w.correct + '</span></div>' +
      '<div class="inc-explanation">💡 ' + w.exp + '</div>' +
      '</div>';
  });
  incSection.innerHTML = html;
}

function fireConfetti() {
  var container = document.getElementById('confetti');
  container.innerHTML = '';
  var colors = ['#58CC02','#1CB0F6','#FFC800','#FF4B4B','#111111','#AFAFAF'];
  for (var i = 0; i < 80; i++) {
    var piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left             = (Math.random() * 100) + 'vw';
    piece.style.background       = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width            = (Math.random() * 10 + 6) + 'px';
    piece.style.height           = (Math.random() * 10 + 6) + 'px';
    piece.style.borderRadius     = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
    piece.style.animationDelay   = (Math.random() * 1.5) + 's';
    container.appendChild(piece);
  }
  setTimeout(function() { container.innerHTML = ''; }, 5000);
}

function quitQuiz() {
  if (confirm('Quit this quiz? Your progress will be lost.')) {
    clearInterval(timerInterval);
    showHome();
  }
}

function showHome() {
  clearInterval(timerInterval);
  showScreen('home');
  initHome();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== STUDY NOTES =====
const NOTES_DATA = [
  {
    title: "🌐 Virtual Worlds Definition",
    icon: "🌐",
    color: "badge-blue",
    notes: [
      "Bartle defines virtual world as persistent, shared, real-time, rule-based environment.",
      "Users act through avatars inside a system governed by automated rules.",
      "Persistence means the world continues even when players leave — if it resets, it's not a virtual world.",
      "Real-time means interaction within ~4 seconds; turn-based systems do not qualify.",
      "Shared means multiple users exist together — single-player systems fail this.",
      "Avatar is the user's representation in the world; without one, no virtual world exists.",
      "Physics means an automated rule system (not real-world physics, but system-enforced logic).",
      "'Not Reality' criterion exists because the real world satisfies all other criteria — so separation is needed.",
      "Chatrooms fail: no automated physics; humans enforce rules, not the system.",
      "D&D fails: the dungeon master controls rules — no automation.",
      "Fortnite fails: each match resets the world — no persistence.",
      "RTS games fail: player controls multiple units, violating one-character-per-player.",
    ]
  },
  {
    title: "👤 Characters, Avatars & Agents",
    icon: "👤",
    color: "badge-green",
    notes: [
      "World is a self-contained interaction space perceived as a separate environment.",
      "Place is a space with meaning — meaning comes from interaction and context.",
      "Virtual means not real but has real effects; functional realism matters more than physical.",
      "Agent is any entity that can act — includes both human and non-human actors.",
      "Character is an agent with human-like cognition; not all agents are characters.",
      "Player Character (PC) is controlled by a human; NPC is controlled by the system.",
      "Avatar is the visual representation of a character — not the same as the player itself.",
      "Companion is an NPC assisting the player, showing semi-autonomous support.",
      "Drone has limited autonomy — not fully independent like an NPC.",
      "Mob refers to a non-character agent, often used for enemies.",
      "Boss is a strong scripted enemy with higher difficulty and importance.",
      "Critter is a decorative entity with no meaningful interaction.",
    ]
  },
  {
    title: "🌿 Gibson's Affordance Theory",
    icon: "🌿",
    color: "badge-yellow",
    notes: [
      "Gibson defines affordance as what the environment offers an organism — focus is on action possibilities.",
      "Affordances exist between object and organism — neither purely subjective nor objective.",
      "Chair affords sitting due to body compatibility; shape alone is not enough.",
      "Ground affords walking if flat and rigid, relative to the human body.",
      "Affordances exist even if not perceived — perception is not required.",
      "Misperception occurs when the wrong affordance is assumed (e.g. glass mistaken for open space).",
      "Niche is the set of affordances available to an organism — defines its ecological role.",
      "Perception is direct detection of affordances; no heavy cognitive processing required.",
      "Affordances depend on scale of organism — the same object differs for a human vs an insect.",
    ]
  },
  {
    title: "🪞 Proteus Effect (Yee & Bailenson)",
    icon: "🪞",
    color: "badge-blue",
    notes: [
      "Proteus Effect: avatar characteristics change user behavior.",
      "Attractive avatars increase confidence and self-disclosure.",
      "Attractive avatars reduce interpersonal distance — people stand closer.",
      "Taller avatars increase dominance — users negotiate more aggressively.",
      "Shorter avatars lead to submissive behavior — users accept unfair deals.",
      "Based on self-perception theory: 'I look like this → I behave like this.'",
      "Deindividuation supports Proteus Effect — reduced self-awareness increases role adoption.",
      "Proteus Effect works even when alone — no need for other people.",
      "Behavioral confirmation depends on others; Proteus depends on self.",
      "Confederates were blind in experiments to remove external influence.",
      "Effect occurs quickly, within minutes — no long-term exposure required.",
      "Behavior can transfer to the real world — not limited to virtual context.",
    ]
  },
  {
    title: "🆔 Metaverse Identity",
    icon: "🆔",
    color: "badge-green",
    notes: [
      "Metaverse identity = combination of personal identity + data identity (two-layer structure).",
      "Personal identity includes avatar, communication, and expression — how the user presents themselves.",
      "Data identity includes biometrics, behavior, and demographics — what the system collects.",
      "Metaverse is persistent and interoperable — identity continues across platforms.",
      "XR includes VR, AR, MR — blends physical and digital.",
      "Users create ideal or experimental identities — identity becomes flexible.",
      "Digital identity affects real behavior — not just a virtual consequence.",
      "Psychological risks: dissociation (disconnect from real self), body dysmorphia from ideal avatars, addiction.",
      "Social risks: harassment (often based on avatar traits), bias and discrimination transfer into virtual spaces.",
      "Data risks: surveillance, biometric tracking (voice, movement, gaze), predictive profiling.",
      "Platforms are not neutral — design influences identity and behavior.",
      "Algorithms shape actions through rewards and visibility; filter bubbles and echo chambers reinforce beliefs.",
      "AI creates fake avatars and deepfakes — identity authenticity becomes a challenge.",
      "Federated learning keeps data on device, reducing privacy risks.",
    ]
  },
  {
    title: "🏙️ Digital Twins",
    icon: "🏙️",
    color: "badge-yellow",
    notes: [
      "Digital twin = real system + virtual model + real-time data; enables monitoring and simulation.",
      "Digital model has no live data — it is a static representation.",
      "Digital shadow has one-way data flow: real to virtual only.",
      "Digital twin has two-way data flow — real and virtual interact.",
      "Smart DCU uses IoT, AI, and 3D visualization in an integrated system approach.",
      "Sensors collect occupancy, noise, and movement data for real-time environmental awareness.",
      "Unreal Engine is used for visualization, creating immersive models.",
      "Digital twin supports decision-making and improves efficiency.",
      "Without real-time data, the system is not a twin — just a model or simulation.",
    ]
  },
  {
    title: "🥽 Social VR & Presence",
    icon: "🥽",
    color: "badge-blue",
    notes: [
      "Social VR enhances interaction — more immersive than traditional media.",
      "Presence: the feeling of 'being there' — a core VR concept.",
      "Embodiment: the feeling that the avatar is your body — a strong psychological effect.",
      "Social presence: the feeling that others exist — enhances communication.",
      "VR increases emotional intensity and makes experiences more realistic.",
      "Interaction becomes more natural in VR, closer to real-world behavior.",
    ]
  },
  {
    title: "🤖 Uncanny Valley (Mori)",
    icon: "🤖",
    color: "badge-green",
    notes: [
      "Mori defines the uncanny valley: near-human realism causes discomfort.",
      "Low realism → acceptable. High realism → acceptable. Middle zone → eerie feeling.",
      "Slight imperfections in near-human robots trigger rejection responses.",
      "Stylized avatars avoid the uncanny valley — they carry less expectation of realism.",
      "Emotional response is the key factor, not just visual accuracy.",
      "Movement amplifies both peaks and valleys — a slightly off movement makes things creepier.",
    ]
  },
  {
    title: "⚡ Key Summary",
    icon: "⚡",
    color: "badge-yellow",
    notes: [
      "Virtual world = system rules + persistence + avatars + interaction.",
      "Identity = what you show (personal) + what the system knows (data).",
      "Behavior = shaped by avatar + environment + platform.",
      "Risk = psychological + social + data + AI manipulation.",
      "Virtual worlds are sub-realities — not fake, but alternate systems.",
      "Identity is co-shaped by user and platform — not fully controlled by either.",
      "Affordances guide user actions — environment shapes behavior.",
      "Avatars act as behavioral triggers — identity influences decisions.",
      "Data collection enables prediction — behavior becomes measurable.",
      "Virtual and real boundaries blur — effects cross both worlds.",
    ]
  }
];

function showNotes() {
  showScreen('notes');
  renderNotes(NOTES_DATA, '');
}

function renderNotes(data, query) {
  const container = document.getElementById('notes-container');
  const q = query.trim().toLowerCase();
  let html = '';
  let totalVisible = 0;

  data.forEach(function(section, si) {
    const visibleNotes = section.notes.filter(function(n) {
      return !q || n.toLowerCase().includes(q);
    });
    if (visibleNotes.length === 0) return;
    totalVisible += visibleNotes.length;

    const isOpen = q || si === 0;
    html += '<div class="notes-section">';
    html += '<div class="notes-section-header ' + (isOpen ? 'open' : '') + '" onclick="toggleSection(this)">';
    html += '<span>' + section.title + '</span>';
    html += '<span class="n-badge">' + visibleNotes.length + '</span>';
    html += '<span class="chevron">▼</span>';
    html += '</div>';
    html += '<div class="notes-body ' + (isOpen ? 'open' : '') + '">';
    visibleNotes.forEach(function(note) {
      const highlighted = q
        ? note.replace(new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>')
        : note;
      html += '<div class="note-item"><span class="dot">•</span><span>' + highlighted + '</span></div>';
    });
    html += '</div></div>';
  });

  if (totalVisible === 0) {
    html = '<div class="notes-empty">🔍 No notes match "' + query + '"</div>';
  }

  container.innerHTML = html;
}

function filterNotes(value) {
  renderNotes(NOTES_DATA, value);
}

function toggleSection(header) {
  header.classList.toggle('open');
  var body = header.nextElementSibling;
  body.classList.toggle('open');
}

// ===== SPLASH =====
function hideSplash() {
  var splash = document.getElementById('splash');
  if (!splash || splash.style.display === 'none') return;
  splash.classList.add('hide');
  setTimeout(function() { splash.style.display = 'none'; }, 650);
}

document.addEventListener('DOMContentLoaded', function() {
  initHome();
  setTimeout(hideSplash, 2000);
});
setTimeout(hideSplash, 4000);

// ===== EXPOSE GLOBALS (fixes onclick in HTML) =====
window.startQuiz     = startQuiz;
window.quitQuiz      = quitQuiz;
window.showHome      = showHome;
window.showNotes     = showNotes;
window.filterNotes   = filterNotes;
window.toggleSection = toggleSection;
window.selectAnswer  = selectAnswer;
