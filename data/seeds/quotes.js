exports.seed = function (knex, Promise) {
  return knex('plants').truncate()
    .then(function () {
      return knex('plants').insert([
        {
          author: 'Epictetus',
          source: 'Enchiridion 5',
          quote: 'It is not things themselves that trouble us, but our judgements about things. Death, for instance, is nothing terrible, otherwise it would have appeared that way to Socrates as well. The terrible thing is the judgement that death is terrible. So whenever we are frustrated, or troubled, or pained, let us never hold anyone responsible except ourselves, meaning our own judgements. Uneducated people blame others when they are doing badly. Those whose education is underway blame themselves. But the fully educated person blames no one, neither himself or anyone else.',
        },
        {
          author: 'Marcus Aurelius',
          source: 'Meditations 11.18.9',
          quote: 'Kindness is invincible, if it is sincere and not an act. What can the most aggressive man do to you if you continue to be kind to him?',
        },
        {
          author: 'Seneca',
          source: 'Letters 4.21.6',
          quote: 'A good intention is of use on the rack, even in the ﬂame which is applied to one limb after another and slowly surrounds the body, even if my heart, though fully aware of its goodness, drips with blood: it will delight in the ﬂame through which its good faith shines forth.',
        },
        {
          author: 'Marcus Aurelius',
          source: 'Meditations 6.50',
          quote: 'Your intentions to act are always with a reserve clause, remember; you were not aiming at the impossible. At what then? Simply at making the attempt itself. In this you succeeded; and with that, the object of your existence is attained.',
        },
        {
          author: 'Seneca',
          source: '95.51 letters',
          quote: 'It is more wretched to harm than to be harmed.',
        },
        {
          author: 'Marcus Aurelius',
          source: 'Meditations 7:47',
          quote: 'Marcus Aurelius, Meditations 7:47 Observe the movement of the stars as if you were running their courses with them, and let your mind constantly dwell on the changes of the elements into each other. Such imaginings wash away the filth of life on the ground.',
        },
        {
          author: '',
          source: '',
          quote: '',
        },
        {
          author: '',
          source: '',
          quote: '',
        },
      ]);
    });
};