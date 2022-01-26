---
hide_table_of_contents: true
---

# OnDispenserBonus

## Usage

* Called before the player is given a bonus item for gathering
* Returning an Item replaces the existing Item

## Examples

```csharp title=""
void OnDispenserBonus(ResourceDispenser dispenser, BasePlayer player, Item item)
{
    Puts("OnDispenserBonus works!");
}
```
