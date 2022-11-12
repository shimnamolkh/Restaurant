# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class Restaurant(WebsiteGenerator):
	def validate(self):
		self.create_open()
		


	def create_open(self):
		if self.status == 'Open' and not self.restaurant_id:
			doc = frappe.get_doc({
				"doctype": "Available Restaurant",
				"restaurant_id":self.restaurant_id,
				
			})
			doc.insert(ignore_permissions=True, ignore_mandatory=True)
			self.restuarant_id = doc.name