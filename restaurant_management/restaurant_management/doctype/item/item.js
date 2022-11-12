// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt
frappe.ui.form.on('Item', {
	menu_link_field: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Menu",
				name:frm.doc.menu_link_field

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('item_id',r.message.menu_id)
					frm.set_value('name1',r.message.name3)
					frm.set_value('status',r.message.status)
					frm.set_value('description',r.message.description)
					frm.set_value('price',r.message.price)
					
			
				}
			}

		});
	},

	customer_link_field: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Customer",
				name:frm.doc.customer_link_field

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('customer_id',r.message.customer_id)
					frm.set_value('table_id',r.message.book_table)
					
			
				}
			}

		});
	},
	
	refresh: function(frm) {
		frm.add_custom_button('Create your order ', () => {
			frappe.new_doc('Order', {
				order_id:frm.doc.name

			})
		})
	}
	
});