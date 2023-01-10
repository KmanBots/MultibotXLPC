package scripts;

import okhttp3.*;
import org.tribot.script.sdk.Log;
import org.tribot.script.sdk.query.Query;
import org.tribot.script.sdk.script.TribotScript;
import org.tribot.script.sdk.script.TribotScriptManifest;
import org.tribot.script.sdk.types.Player;
import org.tribot.script.sdk.util.Resources;
import org.tribot.script.sdk.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import org.json.JSONObject;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

@TribotScriptManifest(name = "TheRaven", author = "Me", category = "Tools", description = "TheRaven")
public class TheRaven implements TribotScript {

	@Override
	public void execute(final String args) {

		// TODO: Setup library?
//		SampleHelper.getHello();
//		String resource = Resources.getString("scripts/my-resource.txt");
//		Log.info("Loaded " + resource);


		System.out.println("Getting all players!");
		List<Player> players = Query.players().toList();
		System.out.println("Getting all players length ! " + players.size());
		Player player = players.get(0);

		try {
			sendPOST(player.getName(), player.getCombatLevel());
		} catch (IOException e) {
			throw new RuntimeException(e);
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}


//		return Query.groundItems() //An egg is a ground item, so let's query those
//				.idEquals(Constants.EGG) //We only want ground items that have an id matching an eggs
//				.findBestInteractable() // Let's make tribot decide which egg to get
//				.map(egg -> egg.interact("Take")) //if there is an egg let's try to pick it up
//				.orElse(false); // if there is not an egg, or taking it fails, let's return false

		System.out.println("First script wooooot!");
	}

	//FemBods79777@msn.com

	private void sendPOST(String name, int combatLevel) throws IOException, InterruptedException {

		OkHttpClient client = new OkHttpClient().newBuilder()
				.build();
		MediaType mediaType = MediaType.parse("application/json");

		// Create a JSONObject
		JSONObject json = new JSONObject();

		// Put the values into the JSONObject
		json.put("name", name);
		json.put("cbLevel", combatLevel);

		// Convert the JSONObject to a string
		String jsonString = json.toString();

		RequestBody body = RequestBody.create(mediaType, jsonString);
		Request request = new Request.Builder()
				.url("http://localhost:3000/osrs-players")
				.method("POST", body)
				.addHeader("Authorization", "Bearer v2xfc87c43812d6c3af13e3781e3a289bb8b63d43bddc48d0574a30e76ab812ff0a")
				.addHeader("Content-Type", "application/json")
				.build();
		Response response = client.newCall(request).execute();
	}
}
