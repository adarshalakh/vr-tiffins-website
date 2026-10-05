export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { pk } = req.body || {};

    if (!pk) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const apiResponse = await fetch(
      "https://e7p4l6r6m2.execute-api.ap-south-1.amazonaws.com/deployment/delete_request_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pk: pk,
        }),
      }
    );

    const responseText = await apiResponse.text();

    let data;

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = {
        success: false,
        message: responseText || "Invalid response from AWS API",
      };
    }

    return res.status(apiResponse.status).json(data);
  } catch (error) {
    console.error("Delete request error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to submit delete request",
    });
  }
}