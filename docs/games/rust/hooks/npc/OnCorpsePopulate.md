---
hide_table_of_contents: true
---

# OnCorpsePopulate

## Usage

* Called when an NPC player corpse is about to be populated with loot
* Returning a BaseCorpse overrides default behavior

## Examples

```csharp title=""
BaseCorpse OnCorpsePopulate(BasePlayer npcPlayer, BaseCorpse corpse)
{
    Puts("OnCorpsePopulate works!");
    return null;
}
```
