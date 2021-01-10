# Extensions

    Programs that are use to prolong the functionality of the browser are know as Extensions.

# Manifest File

    manifest.json is the file that is used to specify about the metadata of your extension and give additional details about your extensions like name, version, description etc.
    developer upload that file using load unpacked through Developer mode to run their extensions.

# Inside Manifest

```
{
	"name": "",
	"version": "",
	"description": "",
	"icons": {
		"16": " ",
		"32": " ",
		"48": " ",
		"128": " "
	},
	"manifest_version": 2
}
```
`
1.  ### name -> it specify the name of your extension.
1.  ### version -> it specify current version of your extension.
1.  ### description -> it gives the brief introduction about your extension.
1.  ### icons -> it is used for extensions icons to give your extension an image.
1.  ### manifest_version -> it indicates which version of the manifest specification a Chrome Extension targets. it must an integer and specify according current version otherwise a sweet error will appear.
`