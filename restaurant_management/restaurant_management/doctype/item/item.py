# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Item(Document):
	pass
	# def validate(self):
	# 	self.before_save()
	# def before_save(self):
	# 	exists = frappe.db.exists(
    #         "Item",
    #     	{
    #         	"status": 'Finished',
    #     	},
	# 	)
	# 	if exists:
	# 		frappe.throw("item does not exists, select another from Menu")

	# def validate(self):
	# 	self.before_save()

	# def before_save(self):
	# 	exists = frappe.db.exists(
	# 		"Item",
    #         {
            
	# 			"status": 'Finished',
	# 		},
	# 	)
	# 	if exists:
	# 		frappe.msgprint("The Item Is Present")

	# 	else:
	# 		frappe.throw("item does not exists, select another from Menu")


	
	# def validate(self):
	# 	self.get_list()
		
	# def get_list(self):
	# 	doc = frappe.get_list('Item',
	# 			filters={
	# 				'status':'Available'
	# 			},
	# 			fields=['name1','price']
	# 	)
	# 	for d in doc:
	# 		if self.status == "Available":
	# 			frappe.msgprint((" {0} is present, price is {1}").format(d.name1,d.price))
	# 		else:
	# 			frappe.throw("Sorry !! {0} is finished").format(d.name1)
	
	# # def get_list(self):
	# 	doc = frappe.db.get_list('Order',
	# 			filters={
	# 				'order_status': 'Pending'

	# 			},
	# 			fields=['order_id', 'item_price']
	# 			)
	# 	for d in doc:
	# 		frappe.msgprint("The pending orders id is{0}and price {1}".format(d.order_id, d.item_pr