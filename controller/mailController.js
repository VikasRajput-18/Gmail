import emailModal from "../models/email.js";

export const saveMailController = async (req, res) => {
  try {
    const email = new emailModal(req.body);
    email.save();
    res.status(200).json({
      message: "Email saved successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

export const getEmails = async (req, res) => {
  try {
    let emails;
    if (req.params.type === "bin") {
      emails = await emailModal.find({ bin: true });
      return res.status(200).json({
        success: true,
        result: emails,
      });
    } else if (req.params.type === "allmail") {
      emails = await emailModal.find({});
      return res.status(200).json({
        success: true,
        result: emails,
      });
    } else if (req.params.type === "starred") {
      emails = await emailModal.find({ starred: true, bin: false });
    } else {
      emails = await emailModal.find({ type: req.params.type });
    }
    return res.status(200).json({
      success: true,
      result: emails,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

export const moveEmailsToBin = async (req, res) => {
  try {
    await emailModal.updateMany(
      { _id: { $in: req.body } },
      {
        $set: { bin: true, starred: false, type: "" },
      }
    );
    return res.status(200).json({
      success: true,
      message: "email deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

export const toggleStarredEmails = async (req, res) => {
  try {
    await emailModal.updateOne(
      { _id: req.body.id },
      { $set: { starred: req.body.value } }
    );
    return res.status(200).json({
      success: true,
      message: "email is starred mark",
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteEmails = async (req, res) => {
  try {
    await emailModal.deleteMany({ _id: { $in: req.body } });
    return res.status(200).json({
      success: true,
      messgae: "Email deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};
