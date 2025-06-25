  // Modal content by ID
const modalDescriptions = {
    "kira": {
        title: "Kira Coldspring",
        text: `
            <p>
                <strong>Race:</strong> Half-Elf<br />
                <strong>Class:</strong> Ranger Level 5<br />
                <strong>Background:</strong> Shadow Realm Orphan<br />
                <strong>Alignment:</strong> Neutral Good<br />
                <strong>Age:</strong> 20<br />
                <strong>Gender:</strong> Female<br />
                <strong>Height:</strong> 5’7”<br />
                <strong>Eyes:</strong> Green<br />
                <strong>Hair:</strong> Short, black<br />
                <strong>Skin:</strong> Pale with ash freckles
            </p>
            <p><strong>Player’s Goal:</strong> To find and confront Jorsh, learn the truth of her past, and protect Belladonna from the rising darkness.</p>
            <p><strong>Ability Scores (with racial bonuses):</strong></p>
            <ul>
                <li><strong>Strength:</strong> 12 (+1)</li>
                <li><strong>Dexterity:</strong> 18 (+4)</li>
                <li><strong>Constitution:</strong> 14 (+2)</li>
                <li><strong>Intelligence:</strong> 10 (+0)</li>
                <li><strong>Wisdom:</strong> 16 (+3)</li>
                <li><strong>Charisma:</strong> 12 (+1)</li>
            </ul>
            <p>
                <strong>Saving Throws:</strong> Strength +4, Dexterity +7<br />
                <strong>Passive Perception:</strong> 16<br />
                <strong>Proficiency Bonus:</strong> +3<br />
                <strong>Armor Class:</strong> 16 (Studded Leather + Dex)<br />
                <strong>Hit Points:</strong> 44<br />
                <strong>Speed:</strong> 35 ft
            </p>
        `,
        link: "npcKiraColdspring.html"
    },

    "baider": {
        title: "Baider Grenmallet",
        text: `
            <p>
                <strong>Race:</strong> Half-Orc<br>
                <strong>Class:</strong> Fighter Level 5<br>
                <strong>Background:</strong> Mercenary Veteran<br>
                <strong>Alignment:</strong> True Neutral<br>
                <strong>Age:</strong> 48<br>
                <strong>Gender:</strong> Male<br>
                <strong>Height:</strong> 6'5"<br>
                <strong>Eyes:</strong> Yellow<br>
                <strong>Hair:</strong> Black, streaked with gray<br>
                <strong>Skin:</strong> Weathered gray-green with numerous battle scars
            </p>

            <p><strong>Player's Goal:</strong> To reconcile with Kira, bury old regrets, and protect Belladonna from the dark tide rising from Hemlock Caverns.</p>

            <p><strong>Ability Scores (with racial bonuses):</strong></p>
            <ul>
                <li><strong>Strength:</strong> 18 (+4)</li>
                <li><strong>Dexterity:</strong> 12 (+1)</li>
                <li><strong>Constitution:</strong> 16 (+3)</li>
                <li><strong>Intelligence:</strong> 10 (+0)</li>
                <li><strong>Wisdom:</strong> 12 (+1)</li>
                <li><strong>Charisma:</strong> 8 (−1)</li>
            </ul>

            <p>
                <strong>Saving Throws:</strong> Strength +7, Constitution +6<br>
                <strong>Passive Perception:</strong> 11<br>
                <strong>Proficiency Bonus:</strong> +3<br>
                <strong>Armor Class:</strong> 17 (Chainmail + Shield)<br>
                <strong>Hit Points:</strong> 55<br>
                <strong>Speed:</strong> 30 ft
            </p>

            <p><strong>Proficiencies & Skills:</strong></p>
            <ul>
                <li><strong>Armor:</strong> All armor, shields</li>
                <li><strong>Weapons:</strong> Simple and martial weapons</li>
                <li><strong>Tools:</strong> Smith’s tools, Mason’s tools</li>
                <li><strong>Languages:</strong> Common, Orc, Dwarvish</li>
                <li><strong>Skill Proficiencies:</strong>
                    <ul>
                        <li>Athletics (+7)</li>
                        <li>Intimidation (+2)</li>
                        <li>Survival (+4)</li>
                        <li>Smith’s Tools (+6)</li>
                    </ul>
                </li>
            </ul>
        `,
        link: "npcBaiderGrenmallet.html"
    },

    "onyx": {
        title: "Onyx Dra'Adonais",
        text: `
            <p><strong>Race:</strong> Hill Dwarf<br/>
            <strong>Class:</strong> Cleric Level 5<br/>
            <strong>Background:</strong> Sage (Hidden Acolyte of the Archons)<br/>
            <strong>Alignment:</strong> Lawful Good (with shades of cosmic Neutrality)<br/>
            <strong>Age:</strong> ??? (appears ~120)<br/>
            <strong>Gender:</strong> Male<br/>
            <strong>Height:</strong> 4'6"<br/>
            <strong>Eyes:</strong> Cloudy silver<br/>
            <strong>Hair:</strong> Braided white beard with gold-threaded runes<br/>
            <strong>Skin:</strong> Earth-brown with faint cracks like stone</p>

            <p><strong>Player's Goal:</strong> To awaken fully as Adonais, protect Kira from the Shadowborn, and stop the rise of Yaldaboath and Varis's schemes.</p>

            <p><strong>Ability Scores (with racial bonuses):</strong><br/>
            <strong>Strength:</strong> 10 (+0)<br/>
            <strong>Dexterity:</strong> 10 (+0)<br/>
            <strong>Constitution:</strong> 16 (+3)<br/>
            <strong>Intelligence:</strong> 14 (+2)<br/>
            <strong>Wisdom:</strong> 18 (+4)<br/>
            <strong>Charisma:</strong> 12 (+1)</p>

            <p><strong>Saving Throws:</strong> Wisdom +7, Charisma +4<br/>
            <strong>Passive Perception:</strong> 14<br/>
            <strong>Proficiency Bonus:</strong> +3<br/>
            <strong>Armor Class:</strong> 18 (Chainmail + Shield)<br/>
            <strong>Hit Points:</strong> 47<br/>
            <strong>Speed:</strong> 25 ft</p>

            <p><strong>Proficiencies &amp; Skills:</strong><br/>
            <strong>Armor:</strong> Light, Medium, Heavy, Shields<br/>
            <strong>Weapons:</strong> Simple weapons, warhammers<br/>
            <strong>Tools:</strong> Brewer's tools, Calligrapher's supplies<br/>
            <strong>Languages:</strong> Common, Dwarvish, Celestial, Abyssal<br/>
            <strong>Skill Proficiencies:</strong><br/>
            Religion (+5)<br/>
            Insight (+7)<br/>
            History (+5)<br/>
            Medicine (+7)</p>
        `,
        link: "npcOnyxDraAdonais.html"
    },

    "elias": {
        title: "Elias Greyfeld",
        text: `
        <p>
            <strong>Race:</strong> Human (Variant)<br />
            <strong>Class:</strong> Ranger Level 6<br />
            <strong>Background:</strong> Outlander<br />
            <strong>Alignment:</strong> Neutral Good<br />
            <strong>Age:</strong> 31<br />
            <strong>Gender:</strong> Male<br />
            <strong>Height:</strong> 6’2”<br />
            <strong>Eyes:</strong> Grey<br />
            <strong>Hair:</strong> Shoulder-length chestnut, often tied back<br />
            <strong>Skin:</strong> Tanned and weathered
        </p>
        <p>
            <strong>Player Goal:</strong> Protect Kira, unravel the truth behind Jorsh and the Trade Ministry, and eventually make peace with his feelings.
        </p>
        <p><strong>Ability Scores (with modifiers):</strong><br />
            Strength: 12 (+1)<br />
            Dexterity: 16 (+3)<br />
            Constitution: 14 (+2)<br />
            Intelligence: 10 (+0)<br />
            Wisdom: 16 (+3)<br />
            Charisma: 10 (+0)
        </p>
        <p>
            <strong>Saving Throws:</strong> Strength +4, Dexterity +6<br />
            <strong>Passive Perception:</strong> 16<br />
            <strong>Proficiency Bonus:</strong> +3<br />
            <strong>Armor Class:</strong> 16 (Studded Leather + Dex)<br />
            <strong>Hit Points:</strong> 52<br />
            <strong>Speed:</strong> 30 ft<br />
            <strong>Initiative:</strong> +3
        </p>
        <p><strong>Proficiencies & Skills:</strong><br />
            <strong>Armor:</strong> Light armor, medium armor, shields<br />
            <strong>Weapons:</strong> Simple weapons, martial weapons<br />
            <strong>Tools:</strong> Herbalism kit<br />
            <strong>Languages:</strong> Common, Elvish, Sylvan
        </p>
        <p><strong>Skill Proficiencies:</strong><br />
            Survival (+6)<br />
            Perception (+6)<br />
            Athletics (+4)<br />
            Nature (+3)<br />
            Stealth (+6)
        </p>
    `,
        link: "npcEliasGreyfeld.html"
    },

    "hawthorn": {
        title: "Princess Hawthorn",
        text: `
      <p><strong>Race:</strong> Half-Elf<br/>
      <strong>Class:</strong> Sorcerer Level 6<br/>
      <strong>Background:</strong> Noble (Rewritten as "Royal Successor")<br/>
      <strong>Alignment:</strong> Lawful Neutral (with Chaotic leanings)<br/>
      <strong>Age:</strong> 28<br/>
      <strong>Gender:</strong> Female<br/>
      <strong>Height:</strong> 5'7"<br/>
      <strong>Eyes:</strong> Violet, intense<br/>
      <strong>Hair:</strong> Golden-blonde curls braided with silver cords<br/>
      <strong>Skin:</strong> Pale with a faint dusk-like undertone when casting spells</p>

      <p><strong>Player Goal:</strong> Navigate the collapsing politics of Yew, undo Varis’s leverage, and possibly restore Elira’s name.</p>

      <p><strong>Ability Scores (with racial bonuses):</strong></p>
      <ul>
        <li><strong>Strength:</strong> 8 (−1)</li>
        <li><strong>Dexterity:</strong> 14 (+2)</li>
        <li><strong>Constitution:</strong> 14 (+2)</li>
        <li><strong>Intelligence:</strong> 12 (+1)</li>
        <li><strong>Wisdom:</strong> 10 (+0)</li>
        <li><strong>Charisma:</strong> 18 (+4)</li>
      </ul>

      <p>
        <strong>Saving Throws:</strong> Constitution +5, Charisma +7<br/>
        <strong>Passive Perception:</strong> 10<br/>
        <strong>Proficiency Bonus:</strong> +3<br/>
        <strong>Armor Class:</strong> 15 (Mage Armor)<br/>
        <strong>Hit Points:</strong> 42<br/>
        <strong>Speed:</strong> 30 ft<br/>
        <strong>Initiative:</strong> +2
      </p>

      <p><strong>Proficiencies & Skills:</strong></p>
      <ul>
        <li><strong>Armor:</strong> Magic Plate (+3 AC)</li>
        <li><strong>Weapons:</strong> Daggers, slings, quarterstaffs, light crossbows</li>
        <li><strong>Tools:</strong> Calligrapher’s supplies</li>
        <li><strong>Languages:</strong> Common, Elvish, Infernal, Draconic</li>
        <li><strong>Skills:</strong>
          <ul>
            <li>Insight +3</li>
            <li>Persuasion +7</li>
            <li>History +4</li>
            <li>Deception +7</li>
            <li>Arcana +4</li>
          </ul>
        </li>
      </ul>
    `,
        link: "npcDarcianneHawthorn.html"
    },

    "liora": {
        title: "Liora Silverhauk",
        text: `
      <p>
        <strong>Race:</strong> Human<br>
        <strong>Class:</strong> Wizard Level 7<br>
        <strong>Background:</strong> Court Sage<br>
        <strong>Alignment:</strong> Lawful Neutral<br>
        <strong>Age:</strong> Appears 55 (actual age closer to 180)<br>
        <strong>Gender:</strong> Female<br>
        <strong>Height:</strong> Unknown<br>
        <strong>Eyes:</strong> Unknown<br>
        <strong>Hair:</strong> Silver-streaked<br>
        <strong>Skin:</strong> Pale with noble markings<br>
        <strong>Role:</strong> Royal Advisor, Secret Keeper, Arcane Guardian
      </p>

      <p><strong>Player’s Goal:</strong> Unknown – Liora serves as a guardian of Belladonna's deepest secrets, and perhaps of Kira herself.</p>

      <p><strong>Ability Scores:</strong></p>
      <ul>
        <li><strong>Strength:</strong> 8 (–1)</li>
        <li><strong>Dexterity:</strong> 14 (+2)</li>
        <li><strong>Constitution:</strong> 12 (+1)</li>
        <li><strong>Intelligence:</strong> 18 (+4)</li>
        <li><strong>Wisdom:</strong> 14 (+2)</li>
        <li><strong>Charisma:</strong> 12 (+1)</li>
      </ul>

      <p>
        <strong>Saving Throws:</strong> Intelligence +7, Wisdom +5<br>
        <strong>Skills:</strong> Arcana +7, History +7, Insight +5, Persuasion +4<br>
        <strong>Languages:</strong> Common, Elvish, Draconic, Infernal, Abyssal<br>
        <strong>Proficiency Bonus:</strong> +3<br>
        <strong>Armor Class:</strong> 14 (Mage Armor or enchanted robes)<br>
        <strong>Hit Points:</strong> 39 (7d6 + 7)<br>
        <strong>Speed:</strong> 30 ft<br>
        <strong>Initiative:</strong> +2
      </p>

      <p><strong>Features & Traits:</strong></p>
      <ul>
        <li><strong>Arcane Recovery (1/day):</strong> Regain spell slots up to half her wizard level after a short rest.</li>
        <li><strong>Divination Savant:</strong> Halved time/gold to copy divination spells into spellbook.</li>
        <li><strong>Portent (2/day):</strong> Roll two d20s after a long rest. Replace rolls with these results.</li>
        <li><strong>Elven Accuracy:</strong> Reroll one die on attacks using Dex, Int, Wis, or Cha when you have advantage.</li>
        <li><strong>Fey Ancestry:</strong> Advantage on saves vs charm; immune to magical sleep.</li>
      </ul>

      <p><strong>Spellcasting:</strong></p>
      <ul>
        <li><strong>Spellcasting Ability:</strong> Intelligence (Save DC 15, +7 to hit)</li>
        <li><strong>Spell Slots:</strong>
          <ul>
            <li>1st level: 4 slots</li>
            <li>2nd level: 3 slots</li>
            <li>3rd level: 3 slots</li>
            <li>4th level: 1 slot</li>
          </ul>
        </li>
        <li><strong>Prepared Spells (11 total):</strong></li>
        <li><strong>Cantrips:</strong> Prestidigitation, Mage Hand, Ray of Frost, Message</li>
        <li><strong>1st Level:</strong> Shield, Mage Armor, Detect Magic, Comprehend Languages</li>
        <li><strong>2nd Level:</strong> Mirror Image, Misty Step, Augury</li>
        <li><strong>3rd Level:</strong> Counterspell, Dispel Magic, Clairvoyance</li>
        <li><strong>4th Level:</strong> Arcane Eye</li>
      </ul>
    `,
        link: "npcLioraSilverhauk.html"
    },

    "rellen": {
        title: "Rellen Thornwatch (aka Elira Hawthorn)",
        text: `
      <p><strong>Race:</strong> Half-Elf<br />
      <strong>Class:</strong> Ranger Level 7<br />
      <strong>Background:</strong> Folk Hero (Rewritten as “Outlaw Protector”)<br />
      <strong>Alignment:</strong> Chaotic Good<br />
      <strong>Age:</strong> 40<br />
      <strong>Gender:</strong> Female<br />
      <strong>Height:</strong> 5'9"<br />
      <strong>Eyes:</strong> Hazel, wary<br />
      <strong>Hair:</strong> Long chestnut with streaks of gray<br />
      <strong>Skin:</strong> Olive-toned with old scar on her jaw</p>

      <p><strong>Player's Goal:</strong> Protect Belladonna’s people in secret, expose Varis, and one day reveal her true identity to Princess Hawthorn.</p>

      <h4>Ability Scores (with racial bonuses):</h4>
      <ul>
        <li><strong>Strength:</strong> 12 (+1)</li>
        <li><strong>Dexterity:</strong> 18 (+4)</li>
        <li><strong>Constitution:</strong> 14 (+2)</li>
        <li><strong>Intelligence:</strong> 10 (+0)</li>
        <li><strong>Wisdom:</strong> 16 (+3)</li>
        <li><strong>Charisma:</strong> 13 (+1)</li>
      </ul>

      <p><strong>Saving Throws:</strong> Strength +4, Dexterity +7<br />
      <strong>Passive Perception:</strong> 16<br />
      <strong>Proficiency Bonus:</strong> +3<br />
      <strong>Armor Class:</strong> 17 (Studded Leather + Dex)<br />
      <strong>Hit Points:</strong> 54<br />
      <strong>Speed:</strong> 30 ft<br />
      <strong>Initiative:</strong> +4</p>

      <h4>Proficiencies & Skills:</h4>
      <ul>
        <li><strong>Armor:</strong> Light, medium, shields</li>
        <li><strong>Weapons:</strong> Simple and martial weapons</li>
        <li><strong>Tools:</strong> Herbalism kit, woodcarver’s tools</li>
        <li><strong>Languages:</strong> Common, Elvish, Sylvan, Thieves’ Cant</li>
        <li><strong>Skill Proficiencies:</strong>
          <ul>
            <li>Stealth (+7)</li>
            <li>Survival (+6)</li>
            <li>Insight (+6)</li>
            <li>Perception (+6)</li>
            <li>Nature (+3)</li>
            <li>Animal Handling (+6)</li>
          </ul>
        </li>
      </ul>
    `,
        link: "npcRellenThornwatch.html"
    },

    "jorsh": {
        title: "Jorsh Sablevein",
        text: `
        <p><strong>Race:</strong> Human<br />
        <strong>Class:</strong> Sorcerer Level 7<br />
        <strong>Background:</strong> Exile<br />
        <strong>Alignment:</strong> Chaotic Neutral (flirting with Chaotic Evil)<br />
        <strong>Role:</strong> Antagonist, tragic antihero, dark sorcerer<br />
        <strong>Challenge Rating:</strong> 9 (5,000 XP)</p>

        <h3>Backstory</h3>
        <p>Once a bright and curious boy in Belladonna, Jorsh grew up alongside Kira Coldspring, sharing dreams of becoming rangers and defending the realm. But the fall of his family — falsely accused of treason — shattered his innocence. Shunned and humiliated, Jorsh turned to forbidden lore, eventually making a pact with the Morvalya Val'Thorin to seek truth and justice by any means necessary.</p>
        <p>Now known as “The Betrayer,” Jorsh seeks a lost artifact in Hemlock Falls that could protect the realm or doom it — depending on his fraying state of mind.</p>

        <h3>Character Traits</h3>
        <p><strong>Ideal:</strong> “I must never be powerless again.”<br />
        <strong>Bond:</strong> “Kira is the only thing left that matters. Even if she hates me.”<br />
        <strong>Flaw:</strong> “I believe only I can fix what’s broken — no one else understands.”</p>

        <h3>Combat Stats</h3>
        <p><strong>Armor Class:</strong> 16 (Mage Armor)<br />
        <strong>Hit Points:</strong> 112 (11d6 + 44)<br />
        <strong>Speed:</strong> 30 ft.</p>

        <h3>Ability Scores</h3>
        <ul>
            <li><strong>Strength:</strong> 10</li>
            <li><strong>Dexterity:</strong> 14</li>
            <li><strong>Constitution:</strong> 18</li>
            <li><strong>Intelligence:</strong> 16</li>
            <li><strong>Wisdom:</strong> 12</li>
            <li><strong>Charisma:</strong> 20</li>
        </ul>

        <h3>Saving Throws</h3>
        <p>Constitution +8, Charisma +9, Dexterity +6</p>

        <h3>Skills</h3>
        <p>Arcana +8, Insight +5, Deception +9, Persuasion +8, Stealth +6</p>

        <h3>Resistances & Immunities</h3>
        <p><strong>Damage Resistances:</strong> Necrotic, Psychic<br />
        <strong>Condition Immunities:</strong> Charmed, Frightened (while in dim light or darkness)</p>

        <h3>Languages</h3>
        <p>Common, Elvish, Deep Speech</p>
    `,
        link: "npcJorshSablevein.html"
    },

    "varis": {
        title: "Varis Aelth'Dor",
        text: `
      <p><em>"I don’t make threats, I offer inevitabilities. The difference is mercy."</em></p>

      <h3>NPC Stat Block</h3>
      <ul>
        <li><strong>Race:</strong> Dark Elf (Drow)</li>
        <li><strong>Class:</strong> Unknown (Arcane/Mage)</li>
        <li><strong>Alignment:</strong> Lawful Evil</li>
        <li><strong>Armor Class:</strong> 17 (Mage Armor)</li>
        <li><strong>Hit Points:</strong> 157 (21d8 + 63)</li>
        <li><strong>Speed:</strong> 30 ft.</li>
      </ul>

      <h4>Ability Scores</h4>
      <ul>
        <li>Strength: 11 (+0)</li>
        <li>Dexterity: 18 (+4)</li>
        <li>Constitution: 16 (+3)</li>
        <li>Intelligence: 19 (+4)</li>
        <li>Wisdom: 14 (+2)</li>
        <li>Charisma: 20 (+5)</li>
      </ul>

      <h4>Skills & Abilities</h4>
      <ul>
        <li><strong>Saving Throws:</strong> Dex +8, Wis +6, Cha +9</li>
        <li><strong>Skills:</strong> Arcana +8, Deception +9, Insight +6, Persuasion +9, Stealth +8</li>
        <li><strong>Damage Resistances:</strong> Psychic, Necrotic</li>
        <li><strong>Senses:</strong> Darkvision 120 ft., Passive Perception 12</li>
        <li><strong>Languages:</strong> Common, Elvish, Undercommon, Infernal</li>
        <li><strong>Challenge:</strong> 10 (5,900 XP)</li>
      </ul>

      <h3>Rumors</h3>
      <p>
        Now serving as Minister of Trade, Varis moves unseen through the highest tiers of power, spreading the influence of the Deep Court, and preparing the surface for his master's awakening beneath Hemlock Caverns.
      </p>
    `,
        link: "npcVarisDarknettle.html"
    },

    "morvelya": {
        title: "Queen Morvelya Val'thorin",
        text: `
      <p><strong>Queen Morvelya Val'thorin</strong> – Archmage of Shadows</p>

      <p><strong>Race:</strong> Dark Elf<br />
      <strong>Class:</strong> Archmage (Custom NPC)<br />
      <strong>Background:</strong> Noble (Umbra'Thal Royalty)<br />
      <strong>Alignment:</strong> Lawful Evil<br />
      <strong>Age:</strong> Unknown (Appears 40s)<br />
      <strong>Gender:</strong> Female<br />
      <strong>Height:</strong> 5'11"<br />
      <strong>Eyes:</strong> Silver-white<br />
      <strong>Hair:</strong> Midnight black<br />
      <strong>Skin:</strong> Dusky violet</p>

      <p><strong>Player's Goal:</strong> Defeat or outmaneuver the Queen before she fully binds the Kingdom of Yew to the Shadow Realm.</p>

      <p><strong>Combat Stats:</strong><br />
      <strong>CR:</strong> 10<br />
      <strong>HP:</strong> 168<br />
      <strong>AC:</strong> 19<br />
      <strong>Speed:</strong> 30 ft<br />
      <strong>Saving Throws:</strong> Int +9, Wis +7, Cha +8<br />
      <strong>Skills:</strong> Arcana +12, Insight +8, Deception +10<br />
      <strong>Senses:</strong> Darkvision 120 ft, passive Perception 15<br />
      <strong>Languages:</strong> Common, Elvish, Undercommon, Shadowtongue</p>

      <p><strong>Traits:</strong></p>
      <ul>
        <li><strong>Shadow Step (3/Day):</strong> Teleport up to 60 ft through dim light or darkness.</li>
        <li><strong>Dominate Surface-Born (1/Day):</strong> One surface-dwelling humanoid within 60 ft must succeed on a DC 18 Wisdom saving throw or be charmed for 1 hour.</li>
        <li><strong>Legendary Actions (3 per round):</strong>
          <ul>
            <li>Cast a cantrip</li>
            <li>Teleport 30 ft in dim light</li>
            <li>Siphon Light: Extinguish all nonmagical light sources within 30 ft</li>
          </ul>
        </li>
      </ul>

      <p><strong>Spellcasting:</strong></p>
      <ul>
        <li><em>At Will:</em> Mage Hand, Minor Illusion, Prestidigitation</li>
        <li><em>3/day:</em> Counterspell, Greater Invisibility, Wall of Force</li>
        <li><em>1/day:</em> Dominate Person, Plane Shift (Shadow Realm only), Disintegrate</li>
      </ul>

      <p><strong>Backstory – The Rise of Queen Morvelya:</strong><br />
      Once a war sorceress from a minor noble house, Morvelya ascended the throne of Umbra'Thal through a pact with Yaldaboath, Demon King of Memory and Betrayal. She assassinated the former king using soul-poison and bound the royal bloodline to her own. Her reign is fueled by vengeance, especially toward the surface-dwelling Coldspring line, whom she considers traitors to drowkind.<br />
      Though once an ally of Minister Varis, their relationship ended violently when he failed to eliminate Elira. Morvelya now offers a bounty for both cousins—Darcianne and Elira—and works in secret to weaken the magical seals protecting the Realm of Light.</p>
    `,
        link: "npcMorvelyaValThorin.html"
    },

    "yithra": {
        title: "Yithra the Gristletoe",
        text: `
      <p><strong>Level:</strong> Warlock (Great Old One – Mogthul the Listener Beneath)</p>
      <p><strong>Race/Class:</strong> Dark Elf Commoner / Warlock</p>
      <p><strong>Alignment:</strong> Chaotic Neutral</p>
      <p><strong>Challenge Rating:</strong> 3</p>
      <p><strong>Proficiency Bonus:</strong> +2</p>
      <p><strong>Armor Class:</strong> 12 (with <em>mage armor</em> if cast)</p>
      <p><strong>Hit Points:</strong> 45 (6d8 + 18)</p>
      <p><strong>Speed:</strong> 30 ft.</p>

      <p><strong>Ability Scores:</strong></p>
      <ul>
        <li><strong>Strength:</strong> 9 (–1)</li>
        <li><strong>Dexterity:</strong> 14 (+2)</li>
        <li><strong>Constitution:</strong> 16 (+3)</li>
        <li><strong>Intelligence:</strong> 12 (+1)</li>
        <li><strong>Wisdom:</strong> 14 (+2)</li>
        <li><strong>Charisma:</strong> 16 (+3)</li>
      </ul>

      <p><strong>Saving Throws:</strong> Wisdom +4, Charisma +5</p>
      <p><strong>Skills:</strong> Arcana +3, Insight +4, Persuasion +5, Deception +5</p>
      <p><strong>Damage Resistances:</strong> Psychic, Necrotic</p>
      <p><strong>Condition Immunities:</strong> Charmed, Frightened</p>
      <p><strong>Senses:</strong> Darkvision 120 ft., Passive Perception 12</p>
      <p><strong>Languages:</strong> Common, Elvish, Deep Speech, Undercommon</p>
    `,
        link: "npcYitrhaGristletoe.html"
    }
            






    // Add more entries as needed
};


function openModal(id) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");

    const data = modalDescriptions[id];

    if (data) {
        modalText.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.text}</p>
      <a href="${data.link}" class="modal-button" target="_blank">SPOILER ALERT: Dungeon Masters Only</a>
    `;
    } else {
        modalText.innerHTML = "<p>Description not available.</p>";
    }

    modal.style.display = "block";
}


    function closeModal() {
        document.getElementById("modal").style.display = "none";
  }

    // Utility: Convert kebab-case to Title Case
    function toTitleCase(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
  }

    // Optional: Close modal on outside click
    window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
  };
