exports.seed = function (knex, Promise) {
  return knex('plants').truncate()
    .then(function () {
      return knex('plants').insert([
        {
          author: "Epictetus",
          source: "Enchiridion 5",
          quote: "It is not things themselves that trouble us, but our judgements about things. Death, for instance, is nothing terrible, otherwise it would have appeared that way to Socrates as well. The terrible thing is the judgement that death is terrible. So whenever we are frustrated, or troubled, or pained, let us never hold anyone responsible except ourselves, meaning our own judgements. Uneducated people blame others when they are doing badly. Those whose education is underway blame themselves. But the fully educated person blames no one, neither himself or anyone else.",
        },
        {
          author: "Marcus Aurelius",
          source: "Meditations 11.18.9",
          quote: "Kindness is invincible, if it is sincere and not an act. What can the most aggressive man do to you if you continue to be kind to him?",
        },
        {
          author: "Seneca",
          source: "Letters 4.21.6",
          quote: "A good intention is of use on the rack, even in the ﬂame which is applied to one limb after another and slowly surrounds the body, even if my heart, though fully aware of its goodness, drips with blood: it will delight in the ﬂame through which its good faith shines forth.",
        },
        {
          author: "Marcus Aurelius",
          source: "Meditations 6.50",
          quote: "Your intentions to act are always with a reserve clause, remember; you were not aiming at the impossible. At what then? Simply at making the attempt itself. In this you succeeded; and with that, the object of your existence is attained.",
        },
        {
          author: "Seneca",
          source: "Letters 95.51",
          quote: "It is more wretched to harm than to be harmed.",
        },
        {
          author: "Marcus Aurelius",
          source: "Meditations 7.47",
          quote: "Observe the movement of the stars as if you were running their courses with them, and let your mind constantly dwell on the changes of the elements into each other. Such imaginings wash away the filth of life on the ground.",
        },
        {
          author: "Cicero",
          source: "On Ends 3.12",
          quote: "The immediate target is to acquire something with selective value. The overall aim is to be a virtuous person; this is a skill like that of an archer, but one extending over one's life as a whole. Achieving the overall aim is compatible with missing the immediate target, and, since they have different kinds of value, they are not competing goals in life.",
        },
        {
          author: "Cicero",
          source: "On Ends 3.22",
          quote: "Take the case of one whose task it is to shoot a spear or arrow straight at some target. One’s ultimate aim is to do all in one’s power to shoot straight, and the same applies with our ultimate goal. In this kind of example, it is to shoot straight that one must do all one can; none the less, it is to do all one can to accomplish the task that is really the ultimate aim. It is just the same with what we call the supreme good in life. To actually hit the target is, as we say, to be selected but not sought.",
        },
        {
          author: "Pierre Hadot",
          source: "The Inner Citadel, pg 106-7",
          quote: "The hēgemonikon is alone free, because it alone can give or refuse its assent to that inner discourse which enunciates what the object is which is represented by a given phantasia. This borderline which objects cannot cross, this inviolable stronghold of freedom, is the limit of what I shall revert to as the inner citadel.",
        },
        {
          author: "Marcus Aurelius",
          source: "Meditations 11.18.7",
          quote: "It is not people's actions that trouble us, but our judgements of them, because the harm lies in their own minds. Remove these judgements, make up your mind to dismiss your assessment of some supposed outrage, and your anger is gone. And how to remove them? By reflecting that no moral harm has been done to you. Moral harm is the only true harm.",
        },
        {
          author: "Antipater",
          source: "Stob 2.7.6a",
          quote: "Live continually selecting what is in accordance with nature and rejecting what is contrary to nature.",
        },
        {
          author: "Seneca",
          source: "Letters 113.2",
          quote: "Virtue is nothing other than the mind disposed in a certain way.",
        },
        {
          author: "Seneca",
          source: "Letters 2.31.1",
          quote: "Each person has accomplished as much as he intended.",
        },
        {
          author: "Seneca",
          source: "Letters 6.9.3",
          quote: "There is no beneﬁt unless it proceeds from a good intention.",
        },
      ]);
    });
};