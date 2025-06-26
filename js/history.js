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
    `,
        link: "npcYithraGristletoe.html"
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
