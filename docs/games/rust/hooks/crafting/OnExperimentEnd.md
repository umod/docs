---
hide_table_of_contents: true
---

# OnExperimentEnd

## Usage

* Called when an experiment is about to end
* Returning a non-null value overrides defualt behaviour.

## Examples

```csharp title=""
object OnExperimentEnd(Workbench workbench)
{
    Puts("OnExperimentEnd works!");
    return null;
}
```
