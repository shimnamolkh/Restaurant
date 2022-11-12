# Copyright (c) 2022, shimna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Bill(Document):
	def validate(self):
		self.set_total_in_words()


		
	def set_total_in_words(self):
		from frappe.utils import money_in_words
		actual_total_currency = get_actual_total(self.actual_total)
		if self.meta.get_field("base_in_words"):
			self.base_in_words = money_in_words(self.base_grand_total, actual_total_currency)
		if self.meta.get_field("in_words"):
			self.in_words = money_in_words(self.grand_total, self.currency)
	
