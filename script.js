// Simpan data game di dalam array
const gamesDatabase = [
  {
    name: "Baldur's Gate 3",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Hogwarts Legacy",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Starfield",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "The Legend of Zelda: Tears of the Kingdom",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Marvel's Spider-Man 2",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Resident Evil 4 Remake",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Cyberpunk 2077: Phantom Liberty",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Armored Core VI: Fires of Rubicon",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Final Fantasy XVI",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Assassin's Creed Mirage",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Mortal Kombat 1",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Call of Duty: Modern Warfare III",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Counter-Strike 2",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Minecraft",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Fortnite",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Roblox",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "League of Legends",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Apex Legends",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Valorant",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Genshin Impact",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Diablo IV",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Elden Ring",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "PUBG: Battlegrounds",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 24",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "NBA 2K24",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "The Sims 4",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Among Us",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Dead by Daylight",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Escape from Tarkov",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Rust",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Dota 2",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "ARK: Survival Evolved",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Sea of Thieves",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Phasmophobia",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Overwatch 2",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Rocket League",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Terraria",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Forza Horizon 5",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Halo Infinite",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Cyber Hunter",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Fall Guys",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Tom Clancy's Rainbow Six Siege",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Hitman 3",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Destiny 2",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Monster Hunter Rise",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Outriders",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Black Desert Online",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "No Man's Sky",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Paladins",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Borderlands 3",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Warframe",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Persona 5",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "CyberConnect2's Fuga: Melodies of Steel",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Lost Ark",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Brawlhalla",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Project Zomboid",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "RimWorld",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Tetris Effect",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "The Forest",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "War Thunder",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Deep Rock Galactic",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Subnautica",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Cities: Skylines II",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Xenoblade Chronicles 3",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Company of Heroes 3",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Roller Champions",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Kena: Bridge of Spirits",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "It Takes Two",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Returnal",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Ratchet & Clank: Rift Apart",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Hades",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Sons of the Forest",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Pokemon Scarlet and Violet",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Stardew Valley",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Fortnite: Save the World",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Smite",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Guild Wars 2",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "RuneScape",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Planet Zoo",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Jurassic World Evolution 2",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Bloodborne",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Sekiro: Shadows Die Twice",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Fire Emblem Engage",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Demon's Souls",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Path of Exile",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Frostpunk",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Metal Gear Solid V: The Phantom Pain",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Mass Effect Legendary Edition",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 96",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 97",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 98: Road to World Cup",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 99",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 2000",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 2001",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA Football 2002",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA Football 2003",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA Football 2004",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA Football 2005",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 06",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 07",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 08",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 09",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 10",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 11",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 12",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 13",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 14",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 15",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 16",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 17",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 18",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 19",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 20",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 21",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 22",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "FIFA 23 PC",
    downloadLink:
      "https://drive.google.com/drive/folders/1AvANpYLZKrrHPz9Lj4eteQMruSgV024G?usp=sharing",
    installLink: "Sedang Dalam Proses",
    gameplayLink: "Sedang Dalam Proses",
  },
  {
    name: "FC 24",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "EA Sports FC 25",
    downloadLink: "Pending",
    installLink: "Pending",
    gameplayLink: "Pending",
  },
  {
    name: "Plant VS Zombies Fusion PC",
    downloadLink: "https://go.gociwidey.com/PB9TjrY",
    installLink: "Sedang Dalam Proses",
    gameplayLink: "Sedang Dalam Proses",
  },
  {
    name: "Plant VS Zombies Fusion Android",
    downloadLink: "https://go.gociwidey.com/VSNH3Fu9",
    installLink: "Sedang Dalam Proses",
    gameplayLink: "Sedang Dalam Proses",
  },
];

// Konfigurasi Fuse.js untuk fuzzy search
const fuse = new Fuse(gamesDatabase, {
  keys: ["name"],
  threshold: 0.4, // Semakin rendah, semakin ketat pencarian; 0.4 cukup toleran terhadap typo
});

// Array untuk menyimpan permintaan game
const gameRequests = [];

// Array untuk menyimpan update terbaru
const updates = [
  "Update 0.1 (30/10/2024 Jam 14:30 WIB):",
  "Menambahkan 3 Link Download Game Yang Baru :",
  "1. FIFA 23 PC",
  "2. Plant VS Zombies Fusion PC",
  "3. Plant VS Zombies Fusion Android",
  "Menambahkan opsi Request Game.",
  "Meningkatkan tampilan UI.",
  "Menambahkan fitur Lihat Update Terbaru.",
  "Menambahkan fitur FAK Eh FAQ.",
];

async function searchGame() {
  const gameName = document.getElementById("game-input").value.trim();
  if (!gameName) return;

  // Tambahkan pesan pengguna ke UI
  addChatBubble(gameName, "user");

  // Cari game di database
  const game = gamesDatabase.find(
    (game) => game.name.toLowerCase() === gameName.toLowerCase()
  );

  if (game) {
    if (game.downloadLink === "Pending") {
      addChatBubble(
        "Maaf! Game Masih Diproses Untuk Dicari Linknya, Tanyakan Game Lain atau Memang Game Tersebut Belum Dibuat atau Sudah Dihapus.",
        "ai"
      );
    } else {
      addChatBubble(
        `Berikut link download game-nya: <a href="${game.downloadLink}" target="_blank">${game.downloadLink}</a><br>` +
          `Cara menginstallnya: <a href="${game.installLink}" target="_blank">${game.installLink}</a><br>` +
          `Gameplay atau cara memainkannya: <a href="${game.gameplayLink}" target="_blank">${game.gameplayLink}</a>`,
        "ai"
      );
    }
  } else {
    addChatBubble(
      "Game tidak ditemukan. Silahkan input nama game di form yang ada di bawah! Terima Kasih.",
      "ai"
    );
  }

  document.getElementById("game-input").value = "";
}

document
  .getElementById("request-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman default

    const gameName = document.getElementById("request-input").value; // Ambil nama game
    addChatBubble(`Permintaan game "${gameName}" telah diterima.`, "ai");

    // Reset input setelah pengiriman
    document.getElementById("request-input").value = "";

    // Kirim form secara manual
    this.submit();
  });

function showUpdates() {
  const updatesOutput = document.getElementById("updates-output");
  updatesOutput.innerHTML = ""; // Kosongkan sebelumnya

  updates.forEach((update) => {
    const updateItem = document.createElement("div");
    updateItem.textContent = update;
    updatesOutput.appendChild(updateItem);
  });
}

// Fungsi untuk menambahkan bubble chat ke UI
function addChatBubble(message, sender) {
  const chatOutput = document.getElementById("chat-output");
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble", sender);
  bubble.innerHTML = message;

  chatOutput.appendChild(bubble);
  chatOutput.scrollTop = chatOutput.scrollHeight; // Autoscroll ke pesan terakhir
}

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
