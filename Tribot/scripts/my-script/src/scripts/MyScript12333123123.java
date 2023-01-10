package scripts;

import org.tribot.script.sdk.Log;
import org.tribot.script.sdk.script.TribotScript;
import org.tribot.script.sdk.script.TribotScriptManifest;
import org.tribot.script.sdk.util.Resources;

@TribotScriptManifest(name = "MyScript1234", author = "Me", category = "Tools", description = "My example script")
public class MyScript12333123123 implements TribotScript {

	@Override
	public void execute(final String args) {
		// Example: Call our shared library class
		SampleHelper.getHello();
		String resource = Resources.getString("scripts/my-resource.txt");
		Log.info("Loaded " + resource);
	}

}
