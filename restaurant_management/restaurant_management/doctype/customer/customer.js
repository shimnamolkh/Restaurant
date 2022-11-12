// Copyright (c) 2022, shimna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Customer', {
	book_table: function(frm) {
		frappe.call({
			method: "frappe.client.get",
			args: {
				doctype:"Available Tables",
				name:frm.doc.book_table

			},
			callback: (r) => {
				if (r.message) {
					frm.set_value('space_rent',r.message.rate)
					
				}
			}

		});
	},
	refresh: function(frm) {
		frm.add_custom_button('Create Item ', () => {
			frappe.new_doc('Item', {
				name1:frm.doc.name

			})
		})
	},
	refresh: function(frm) {
			

			frm.add_custom_button(__('Your Item'), function(){
				frappe.new_doc('Item', {
					Item: frm.doc.name
				})
				
			}, __("Get Access TO"));
		
			frm.add_custom_button(__('Your Order'), function(){
				frappe.new_doc('Order', {
					Order: frm.doc.name
				})
				
			}, __("Get Access TO"));
		
			frm.add_custom_button(__('Your Bill'), function(){
				frappe.new_doc('Bill', {
					Bill: frm.doc.name
				})
				
			}, __("Get Access TO"));

	},
			
		
	

	menu_check:function(frm) {
		frm.call({
			method:'all_menu_items_section',
			doc:frm.doc,
			args: {
				doctype:"Menu"
	
			},
			callback: function(r) {
				frappe.msgprint(__("successfully  updated"))
				frm.refresh_field('menu_table');
	
			}
		});
	}
});