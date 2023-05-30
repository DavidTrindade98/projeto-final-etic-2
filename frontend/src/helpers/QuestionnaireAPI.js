export const submitQuestionnaire = async (accessToken, questionnaireData) => {
  try {
    const response = await fetch("http://localhost:8000/request/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(questionnaireData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to submit questionnaire");
    }
  } catch (error) {
    throw error;
  }
};