// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Restaurant', {
	book_table: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Available Tables",
				name:frm.doc.book_table

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('table_rent',r.message.rate)
					
				}
			}

		});
	},
	// refresh: function(frm) {
	// 	frm.add_custom_button('create table ', () => {
	// 		frappe.new_doc('Tables', {
	// 			space_rent:frm.doc.name

	// 		})
	// 	})
	// },
	// refresh: function(frm) {
	// 	frm.add_custom_button('Your Menu', () => {
	// 		frappe.new_doc('Menu', {
	// 			Menu_id: frm.doc.name
		
	// 		})
	// 	})

		
	// },
	refresh: function(frm) {
		frm.add_custom_button('Update Table Types', () => {
			frappe.new_doc('Table Types', {
				item_id:frm.doc.name

			})
		})
	},



});

