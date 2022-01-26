---
hide_table_of_contents: true
---

# OnExperimentStart

## Usage

* Called when the player attempts to experiment with at a workbench
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnExperimentStart(Workbench workbench, BasePlayer player)
{
    Puts("OnExperimentStart works!");
    return null;
}
```
