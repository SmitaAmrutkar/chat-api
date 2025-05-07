const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { receiver, content } = req.body;
  try {
    const message = await Message.create({
      sender: req.user._id,
      receiver,
      content
    });
    res.status(201).json(message);
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: 'Failed to send message' });
  }
};

exports.getMessages = async (req, res) => {
  const receiverId = req.params.receiverId;
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: receiverId },
        { sender: receiverId, receiver: req.user._id }
      ]
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
