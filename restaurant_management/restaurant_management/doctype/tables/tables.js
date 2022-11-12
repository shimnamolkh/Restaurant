// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tables', {
	table_type_link: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Table Types",
				name:frm.doc.table_type_link

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('rate',r.message.rent)
					frm.set_value('type',r.message.table_type)
				}
			}

		});
	},
});
