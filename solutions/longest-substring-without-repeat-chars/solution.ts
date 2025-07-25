function lengthOfLongestSubstring(s: string): number {
	let maxLength = 0;
	let left = 0;
	const charSet = new Set<string>();

	for (let right = 0; right < s.length; right++) {
		const currentChar = s[right];

		while (charSet.has(currentChar)) {
			charSet.delete(s[left]);
			left++;
		}

		charSet.add(currentChar);
		maxLength = Math.max(maxLength, right - left + 1);
	}

	return maxLength;
}

export default lengthOfLongestSubstring;
