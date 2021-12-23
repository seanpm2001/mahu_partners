/**
 * Provides English labels.
 * 
 * Copyright 2020 SLUB Dresden
 */
mahupartners.Localization = (function (){
	const language = "en";
	
	const localizedStrings = {
		"Kontakt": "Contact",
		"Vorname":"Surname",
		"Nachname":"Familyname",
		"Titel":"Title",
		"E-Mail":"E-mail",
		"Telefon":"Phone",
		"Fax":"Fax",
		"Materialklassen":"Material classes",
		"Materialklassen.contact.help":"Material classes, for which this is the primary contact (semicolon-separated enumeration).",
		"Typ":"Type of expertise",
		"Typ.0": "Production",
		"Typ.1": "Material testing",
		"Typ.2": "Material certification",
		"Typ.3": "Material coating",
		"Typ.4": "Material processing",
		"Typ.5": "Material construction",
		"Bezeichnung":"Name",
		"Beschreibung":"Description",
		"Zweck":"Purpose",
		"Abnahmemenge":"Quantities",
		"Eingehen auf Kundenwünsche":"Respond to customer needs",
		"Materialklassen.expertise.help":"Material classes, to which this expertise refers to (semicolon-separated enumeration)",
		"Regularien":"Regulations",
		"Regularien.help":"Regulations, to which this expertise refers to, e. g., when testing or producing materials. Press and hold the Ctrl key to select multiple entries.",
		"partnerpage.new.name.2":"Organizational unit",
		"partnerpage.new.name.1":"Name"
	};
	
	return {
		getLanguage : function(){
			return language;
		},
		getString : function(key){
			return localizedStrings[key] || key;
		}
	}
})();