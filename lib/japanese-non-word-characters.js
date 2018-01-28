'use babel';

export default {

  activate(state) {
    const keyPath = 'editor.nonWordCharacters';
    const japaneseNonWordCharacters = '、。「」【】『』（）！？　てにをはがのともへでや';
    const existingNonWordCharacters = atom.config.get(keyPath);
    if (!existingNonWordCharacters.includes(japaneseNonWordCharacters)) {
      atom.config.set(keyPath, `${existingNonWordCharacters}${japaneseNonWordCharacters}`);
    }
  },
};
