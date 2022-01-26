---
hide_table_of_contents: true
---

# OnPlayerCorpseSpawn

## Usage

* Called when a non-null corpse is about to spawn
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerCorpseSpawn(BasePlayer player)
{
    Puts("OnPlayerCorpseSpawn works!");
    return null;
}
```
