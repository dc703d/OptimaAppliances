# Optima Appliances Website

Optima Appliances is a professional appliance repair service. This website was built to showcase the business, provide service information, answer frequently asked questions, and allow customers to easily get in touch regarding repair needs.

Live Demo

https://optimaappliances.co.uk

Project Structure

The website consists of the following pages:
	•	Home – Introduction to the brand and services.
	•	About – Company background and values.
	•	Services – Overview of appliance repair services offered.
	•	FAQs – Common questions and helpful answers.
	•	Contact – A contact form to submit appliance repair requests.

Tech Stack
	•	React – Frontend framework
	•	Tailwind CSS – Utility-first CSS framework for styling
	•	JavaScript – Logic and structure

Contact Form

The contact page includes a contact form powered by Web3Forms — no backend setup required. It allows users to:
	•	Enter their name, email, and appliance issue
	•	Submit their request, which is sent directly to the business email address configured with Web3Forms

You must have a Web3Forms access key for production use. Be sure to set it in your .env or directly in the form component if you’re not using environment variables.

Getting Started

To run this project locally:

git clone https://github.com/dc703d/OptimaAppliances.git
cd OptimaAppliances
npm install
npm run dev