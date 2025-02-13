import { createKeypairs } from "./src/createKeys";
import { buyBundle } from "./src/jitoPool";
import { sender } from "./src/senderUI";
import { createWalletSells, sellXPercentage } from "./src/sellFunc";
import { remove } from "./src/removeLiq";
import promptSync from "prompt-sync";

const prompt = promptSync();

async function main() {
	let running = true;

	while (running) {
		console.log("DM me for purchase");
		console.log("https://t.me/rhettjel");
		console.log("1. Create Keypairs");
		console.log("2. PreLaunch Checklist");
		console.log("3. Create Pool Bundle");
		console.log("4. Sell All Buyers");
		console.log("5. Sell Percentage of Supply");
		console.log("6. Remove Liquidity");
		console.log("Type 'exit'");

		const answer = prompt("Optionss or 'exit': "); 

		switch (answer) {
			case "1":
				await createKeypairs();
				break;
			case "2":
				await sender();
				break;
			case "3":
				await buyBundle();
				break;
			case "4":
				await createWalletSells();
				break;
			case "5":
				await sellXPercentage();
				break;
			case "6":
				await remove();
				break;
			case "exit":
				running = false;
				break;
			default:
				console.log("Invalid option, try again idoits.");
		}
	}

	console.log("Exiting...");
	process.exit(0);
}

main().catch((err) => {
	console.error("Error:", err);
});
