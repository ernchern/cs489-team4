const admin = require('firebase-admin');

serviceAccount = {
  "type": "service_account",
  "project_id": "cs489-team-4",
  "private_key_id": "25aaee624afe888311d5a366c5292568862bd8ab",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDkk6mjsNm4/5Nk\njNMsHkZTix8dEocQ5yOQ7A0+x0A2WP1Mwq9lAxHXqrKWSAVoQElHEdcJ568ldwko\nVefyh2c4/590JO+gVdbVONTEDc/UqPr5RrZcZ+8au2NVRpOJOn+1YJl/CreAenOn\nZW7cQ4YHJyaUKntZRKJqNJMdWov4ZWd+dMimedA4/7dJ3tVFZBnt/giM58gCvUGz\nrBzXwEGWBGo8EQY8Mlc+LgFBuoHOy8O4nnMJzi1p2WwrcXfYmmDlHj4hhicDll73\n0bqsm5I3dZ8fYXLWHEm4W4lI5rer3sEZIQXuNm3HLLw3eofiDpSshM3xk3RorE/K\nIcm3cm4zAgMBAAECggEAEk+J7WUDbAB9TDbDy+r480RXz7pmO4JopPlj7j2D9VaX\npAiMiGkAiuhPuh424K0Vsa3KLi7zJussPqDzHcifCj/gBCvZTlzSAu60jKgWmBCZ\nWlLB1RE2ZEvSn0gyFXIsPNlqMnUnUhF9JlHH2blHCVenjYMBspr+78caaeWRBOrj\n2YHVFK2UyAfJoBpXQlX55MK5yrCb6o0XG2s+HTVxFz0U4uMrSfazoPOdR2lNRxlX\nZXJo3G6vSv2HFN3odm1vaq+eU7FdRg2zkCvZmy4B8Gdp4pkQcJTdDMcHOpvy4qok\ns0AOjTkLfVKfGsTvL/szA40vAdeh3gTbyv3lwY9i4QKBgQD/RD/Hq7Ir4xs0+uMb\ngHwI6y86I2xn+pntyw6lM4MHgD+e2rF3/WE2WPdejqKGWHEkAwt0O9rpvWM/3cVq\nzGatSCc7VO11EdhCJwqTJTIhRLf9gVgFXQu+tqylz0dIpQHwQ+HVXhXWZrYcoGCC\nLsh47LbI/RunCQ/3MluFJhJz6wKBgQDlO8huYF4MzW3W3fRxRqaE7kwx6jGeGQ7d\nS3y43OwSjgHWmNySlCaUSG6aXCvw6QMF+SrsIupnMC0fzRZidlAWsQEaoOu8/i2Z\n2OaqWw6wg39lo76ThkOp13OYAmQp8zXJ10IHDZAGuye0r2IYL2ce1VkPoe6AvJzw\nvMBITNuE2QKBgQCGoXNWFxs4hGZEEhKX3bMNbSUSb75sNMLcpN0LiliQKzbizIsP\nMucDp/aHu4jCfIDnsmdnHW5/GvDurUPC6R06RTTT2R4IQaoicb7lDpga7chwfrhy\n07kvE9+I8AKzsLuOAe9o/l9cHf3sqTVdU9lN1eMtrDjaZzAxezDDz+mpkwKBgQCw\nE++s+NDFPLZ2KR8uM3qM+Q4F+UILkmvch7NRvECJMBMxZ1FmNe48UDbE0q/d6N2t\npOrXXyp2AIdoufvLvd1e0K9saNcq4ILefcEQcckixJ8Cz3f/kU5AE4Jy7MNLhcl3\nNKU/Dafnw7KIE39h3Gd1Q6OZYmT09ewG7rUz0/V6YQKBgHw8yNNSkF4EduKjFrKS\n78Je5/47JWvsooiCE5JGFaxyBZ48+F9VE1WtpIPREh3JHgk9i9FSp7jWed7VL1FX\n/diuVX1/lXHmcCb/ktb9thLKrlsUphDMGCeaVejnIOKRQQk/ltiTu4dF/5WW5uRl\nSy6MyRbU6oWGwaMrWzZD+5H3\n-----END PRIVATE KEY-----\n",
  "client_email": "vdx-965@cs489-team-4.iam.gserviceaccount.com",
  "client_id": "100789700895942501056",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/vdx-965%40cs489-team-4.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

/* Follow the sample here to manage the database. */

// Writing the database.
questionRef = db.collection('question').doc('q20');


questionRef.set({
	desc_AI: {
		optionA:"Our AI system analyzes these photos and concludes that the woman on the left has a higher chance to become a killer, than the woman on the right.\n"+
		"Do you agree?",
						 
		optionB: "Our AI system analyzes these photos and concludes that the woman on the right has a higher chance to become a killer, than the woman on the left.\n"+ 
						 "Do you agree?",
	},
	desc_human: {
		optionA:"Another participant looks at these photos and concludes that the woman on the left has a higher chance to become a killer, than the woman on the right.\n"+
						  "Do you agree?",
						  
		optionB:"Another participant looks at these photos and concludes that the woman on the right has a higher chance to become a killer, than the woman on the left.\n"+ 
						 "Do you agree?",
	},
	img_src: "https://images.unsplash.com/photo-1480997347013-c5b608da7dcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
	img_src2:"https://images.unsplash.com/photo-1551847661-4fb30b8a78fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
});

// Reading the database.
db.collection('question').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
	  if(doc.id == 'q20')
		console.log(doc.id, '=>', doc.data()['desc_human']['optionB']);
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });