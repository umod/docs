---
hide_table_of_contents: true
---

# OnRunPlayerMetabolism

## Usage

* Called before a metabolism update occurs for the specified player
* Metabolism update consists of managing the player's temperature, health etc.
* You can use this to turn off or change certain aspects of the metabolism, either by editing values before returning, or taking complete control of the method
* Returning a non-null value cancels the update

## Examples

```csharp title=""
object OnRunPlayerMetabolism(PlayerMetabolism metabolism, BasePlayer player, float delta)
{
    Puts("OnRunPlayerMetabolism works!");
    return null;
}
```
