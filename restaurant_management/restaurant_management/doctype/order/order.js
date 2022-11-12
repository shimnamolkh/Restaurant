// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Order', {
	item_link_field: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Item",
				name:frm.doc.item_link_field

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('item_id',r.message.item_id)
					frm.set_value('item_price',r.message.price)
					frm.set_value('customer_id',r.message.customer_id)
					frm.set_value('table',r.message.table_id)
				}
			}

	
		});
	},

	refresh: function(frm) {
		frm.add_custom_button('Update Item ', () => {
			frappe.new_doc('Item', {
				item_id:frm.doc.name

			})
		})
	},
	before_save: function(frm) {
		frm.set_value('item_total',(frm.doc.item_quantity) * (frm.doc.item_price))
	},

		
	refresh: function(frm) {
		frm.add_custom_button('Get Your BILL', () => {
			frappe.new_doc('Bill', {
				bill_id:frm.doc.name

			})
		})
	},
});
	
	


		