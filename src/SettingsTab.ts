import GPTPlugin from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

class GPTSettingTab extends PluginSettingTab {
  plugin: GPTPlugin;

  constructor(app: App, plugin: GPTPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;
    let { gpt3, chatgpt, ai21, cohere } = this.plugin.settings.models;

    containerEl.empty();

    containerEl.createEl("h2", { text: "Obsidian GPT settings" });

    containerEl.createEl("h3", { text: "API Keys" });

    new Setting(containerEl)
      .setName("OpenAI API Key")
      .setDesc("Enter your OpenAI API Key")
      .addText((text) =>
        text
          .setPlaceholder("API Key")
          .setValue(gpt3.apiKey)
          .onChange(async (value) => {
            gpt3.apiKey = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("AI21 API Key")
      .setDesc("Enter your AI21 API Key")
      .addText((text) =>
        text
          .setPlaceholder("API Key")
          .setValue(ai21.apiKey)
          .onChange(async (value) => {
            ai21.apiKey = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Cohere API Key")
      .setDesc("Enter your Cohere API Key")
      .addText((text) =>
        text
          .setPlaceholder("API Key")
          .setValue(cohere.apiKey)
          .onChange(async (value) => {
            cohere.apiKey = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Chat Completion Separator")
      .addText((text) =>
        text
          .setValue(this.plugin.settings.chatSeparator)
          .onChange(async (value) => {
            this.plugin.settings.chatSeparator = value;
            await this.plugin.saveSettings();
          })
      );

    containerEl.createEl("h3", { text: "Completion & Prompt Tags" });

    new Setting(containerEl)
      .setName("Tag Completions?")
      .setDesc(
        "Optionally put a tag around text which was generated via completion"
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.tagCompletions)
          .onChange(async (value) => {
            this.plugin.settings.tagCompletions = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl).setName("Opening Completion Tag").addText((text) =>
      text
        .setPlaceholder("<Completion>")
        .setValue(this.plugin.settings.tagCompletionsHandlerTags.openingTag)
        .onChange(async (value) => {
          this.plugin.settings.tagCompletionsHandlerTags.openingTag = value;
          await this.plugin.saveSettings();
        })
    );

    new Setting(containerEl).setName("Closing Completion Tag").addText((text) =>
      text
        .setPlaceholder("</Completion>")
        .setValue(this.plugin.settings.tagCompletionsHandlerTags.closingTag)
        .onChange(async (value) => {
          this.plugin.settings.tagCompletionsHandlerTags.closingTag = value;
          await this.plugin.saveSettings();
        })
    );

    new Setting(containerEl)
      .setName("Tag Prompts?")
      .setDesc("Optionally put a tag around text which was used as prompt")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.tagPrompts)
          .onChange(async (value) => {
            this.plugin.settings.tagPrompts = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl).setName("Opening Prompt Tag").addText((text) =>
      text
        .setPlaceholder("<Prompt>")
        .setValue(this.plugin.settings.tagPromptsHandlerTags.openingTag)
        .onChange(async (value) => {
          this.plugin.settings.tagPromptsHandlerTags.openingTag = value;
          await this.plugin.saveSettings();
        })
    );

    new Setting(containerEl).setName("Closing Prompt Tag").addText((text) =>
      text
        .setPlaceholder("</Prompt>")
        .setValue(this.plugin.settings.tagPromptsHandlerTags.closingTag)
        .onChange(async (value) => {
          this.plugin.settings.tagPromptsHandlerTags.closingTag = value;
          await this.plugin.saveSettings();
        })
    );

    new Setting(containerEl)
      .setName("Tag Chat Completions?")
      .setDesc(
        "Optionally put a tag around text which was generated via chat completion"
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.tagChatCompletions)
          .onChange(async (value) => {
            this.plugin.settings.tagChatCompletions = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Opening Chat Completion Tag")
      .addText((text) =>
        text
          .setPlaceholder("<ChatCompletion>")
          .setValue(
            this.plugin.settings.tagChatCompletionsHandlerTags.openingTag
          )
          .onChange(async (value) => {
            this.plugin.settings.tagChatCompletionsHandlerTags.openingTag =
              value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Closing Chat Completion Tag")
      .addText((text) =>
        text
          .setPlaceholder("</ChatCompletion>")
          .setValue(
            this.plugin.settings.tagChatCompletionsHandlerTags.closingTag
          )
          .onChange(async (value) => {
            this.plugin.settings.tagChatCompletionsHandlerTags.closingTag =
              value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Tag Chat Prompts?")
      .setDesc("Optionally put a tag around text which was used as chat prompt")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.tagChatPrompts)
          .onChange(async (value) => {
            this.plugin.settings.tagChatPrompts = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Opening Chat Prompt Tag")
      .addText((text) =>
        text
          .setPlaceholder("<Prompt>")
          .setValue(this.plugin.settings.tagChatPromptsHandlerTags.openingTag)
          .onChange(async (value) => {
            this.plugin.settings.tagChatPromptsHandlerTags.openingTag = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Closing Chat Prompt Tag")
      .addText((text) =>
        text
          .setPlaceholder("</Prompt>")
          .setValue(this.plugin.settings.tagChatPromptsHandlerTags.closingTag)
          .onChange(async (value) => {
            this.plugin.settings.tagChatPromptsHandlerTags.closingTag = value;
            await this.plugin.saveSettings();
          })
      );
  }
}

export default GPTSettingTab;
