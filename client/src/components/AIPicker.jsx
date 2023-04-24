import CustomButton from "./CustomButton";

const AIPicker = ({
  prompt,
  setPrompt,
  geenratingImg,
  setGeneratingImg,
  handleSubmit,
}) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea placeholder:tracking-wider"
        rows={5}
        placeholder="Ask AI to generate an image for you!"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {geenratingImg ? (
          <CustomButton type="filled" title="Asking AI..." />
        ) : (
          <CustomButton />
        )}
      </div>
    </div>
  );
};

export default AIPicker;
