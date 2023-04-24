/* eslint-disable react/prop-types */
import CustomButton from "./CustomButton";

const AIPicker = ({
  prompt,
  setPrompt,
  geenratingImg,
  // eslint-disable-next-line no-unused-vars
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
          <CustomButton
            type="filled"
            title="Asking AI..."
            customStyles="text-[12px]"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-[12px]"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-[12px]"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
