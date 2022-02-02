---
hide_table_of_contents: true
---

# OnExperimentEnd

## Usage

* Called when an experiment is about to end
* Return a non-null value to override defualt behavior

## Examples

```csharp title=""
object OnExperimentEnd(Workbench workbench)
{
    Puts("OnExperimentEnd works!");
    return null;
}
```
